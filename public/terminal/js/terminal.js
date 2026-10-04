/**
 * Interactive Terminal Command Handling Engine
 * Author: Harry Rogers CV & Portfolio SPA
 */

(function() {
    'use strict';

    // State Management
    const state = {
        historyStack: [],
        historyIndex: -1,
        crtEnabled: true,
        currentTheme: 'default'
    };

    // DOM Element Handles
    let outputEl, inputEl, bodyEl, crtBtn, clearBtn;

    // Command Registry Map
    const COMMANDS = {
        help: {
            desc: 'List all available terminal commands and usage examples',
            usage: 'help [command]',
            exec: handleHelp
        },
        about: {
            desc: 'Show Harry Rogers background, current role at Chess Dynamics, and academic honors',
            usage: 'about (or cv)',
            exec: handleAbout
        },
        cv: {
            desc: 'Alias for about command — display Master CV summary',
            usage: 'cv',
            exec: handleAbout
        },
        skills: {
            desc: 'Display organized matrix of FPGA, HIL, Electro-Optics, Protocol, and Software skills',
            usage: 'skills [category]',
            exec: handleSkills
        },
        experience: {
            desc: 'List detailed professional work history (Chess Dynamics, BAE Systems)',
            usage: 'experience',
            exec: handleExperience
        },
        projects: {
            desc: 'Show featured engineering portfolio projects (VAIDAR, Optical Test Bench, FPV Avionics)',
            usage: 'projects [id]',
            exec: handleProjects
        },
        education: {
            desc: 'Display degree credentials, University of Brighton details, and course modules',
            usage: 'education',
            exec: handleEducation
        },
        awards: {
            desc: 'Display honors and professional distinctions (IET Prize 2026, BAE Systems Commendation)',
            usage: 'awards',
            exec: handleAwards
        },
        contact: {
            desc: 'Display contact email, location, website, LinkedIn, and PDF document links',
            usage: 'contact',
            exec: handleContact
        },
        vaidar: {
            desc: 'Deep dive into the VAIDAR HIL FPGA verification framework architecture & sample code',
            usage: 'vaidar',
            exec: handleVaidar
        },
        banner: {
            desc: 'Print retro header ASCII banner',
            usage: 'banner',
            exec: handleBanner
        },
        clear: {
            desc: 'Clear output buffer',
            usage: 'clear',
            exec: handleClear
        },
        history: {
            desc: 'View command input history log',
            usage: 'history',
            exec: handleHistory
        },
        theme: {
            desc: 'Switch theme scheme (default, matrix, cyberpunk, amber, dracula)',
            usage: 'theme [theme_name]',
            exec: handleTheme
        },
        echo: {
            desc: 'Print custom text string to terminal output',
            usage: 'echo <message>',
            exec: handleEcho
        }
    };

    // Initialize Event Listeners
    function initTerminal() {
        outputEl = document.getElementById('terminal-output');
        inputEl = document.getElementById('command-input');
        bodyEl = document.getElementById('terminal-body');
        crtBtn = document.getElementById('btn-toggle-crt');
        clearBtn = document.getElementById('btn-clear-term');

        const windowEl = document.querySelector('.terminal-window');
        if (windowEl) {
            windowEl.addEventListener('click', () => {
                if (inputEl) inputEl.focus();
            });
        }

        // CRT Toggle button
        if (crtBtn) {
            crtBtn.addEventListener('click', toggleCRT);
        }

        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', () => handleClear());
        }

        // Keydown listener for Command Input
        if (inputEl) {
            inputEl.addEventListener('keydown', handleKeyDown);
            inputEl.focus();
        }

        // Display initial banner
        handleBanner();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTerminal);
    } else {
        initTerminal();
    }

    // Main Key Down Handler
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            const rawVal = inputEl.value.trim();
            if (rawVal !== '') {
                executeCommand(rawVal);
                state.historyStack.push(rawVal);
                state.historyIndex = state.historyStack.length;
            } else {
                appendPromptEcho('');
            }
            inputEl.value = '';
            scrollToBottom();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.historyStack.length > 0 && state.historyIndex > 0) {
                state.historyIndex--;
                inputEl.value = state.historyStack[state.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (state.historyIndex < state.historyStack.length - 1) {
                state.historyIndex++;
                inputEl.value = state.historyStack[state.historyIndex];
            } else {
                state.historyIndex = state.historyStack.length;
                inputEl.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            handleTabCompletion();
        } else if (e.ctrlKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            handleClear();
        } else if (e.ctrlKey && e.key.toLowerCase() === 'c') {
            e.preventDefault();
            appendPromptEcho(inputEl.value + ' ^C');
            inputEl.value = '';
            scrollToBottom();
        }
    }

    // Command Dispatcher
    function executeCommand(cmdString) {
        if (!outputEl) outputEl = document.getElementById('terminal-output');
        appendPromptEcho(cmdString);
        const parts = cmdString.trim().split(/\s+/);
        const cmdName = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (COMMANDS[cmdName]) {
            const resultHtml = COMMANDS[cmdName].exec(args);
            if (resultHtml) appendOutput(resultHtml);
        } else {
            handleUnknownCommand(cmdName);
        }
        scrollToBottom();
    }
    window.executeCommand = executeCommand;

    // Prompt Echo Helper
    function appendPromptEcho(cmdStr) {
        if (!outputEl) outputEl = document.getElementById('terminal-output');
        const div = document.createElement('div');
        div.className = 'cmd-prompt-echo';
        div.innerHTML = `<span class="prompt-user">guest</span><span class="prompt-at">@</span><span class="prompt-host">harryrogers</span>:<span class="prompt-path">~</span><span class="prompt-symbol">$</span> ${escapeHtml(cmdStr)}`;
        outputEl.appendChild(div);
    }

    function appendOutput(htmlContent) {
        if (!outputEl) outputEl = document.getElementById('terminal-output');
        const div = document.createElement('div');
        div.className = 'cmd-block';
        div.innerHTML = htmlContent;
        outputEl.appendChild(div);
    }

    function scrollToBottom() {
        if (!bodyEl) bodyEl = document.getElementById('terminal-body');
        if (bodyEl) bodyEl.scrollTop = bodyEl.scrollHeight;
    }

    function escapeHtml(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // Levenshtein Distance & Fuzzy Match
    function handleUnknownCommand(typedCmd) {
        let bestMatch = null;
        let minDist = Infinity;

        Object.keys(COMMANDS).forEach(cmd => {
            const dist = levenshtein(typedCmd, cmd);
            if (dist < minDist) {
                minDist = dist;
                bestMatch = cmd;
            }
        });

        let msg = `<div class="cmd-result" style="color: var(--accent-rose);">Command not found: <strong>${escapeHtml(typedCmd)}</strong></div>`;
        if (minDist <= 2 && bestMatch) {
            msg += `<div class="cmd-result" style="margin-top: 4px; color: var(--accent-amber);">Did you mean <span class="cmd-chip" onclick="executeCommand('${bestMatch}')">${bestMatch}</span>?</div>`;
        } else {
            msg += `<div class="cmd-result" style="margin-top: 4px; color: var(--text-muted);">Type <span class="cmd-chip" onclick="executeCommand('help')">help</span> for a list of available commands.</div>`;
        }
        appendOutput(msg);
    }

    function levenshtein(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }
        return matrix[b.length][a.length];
    }

    // Tab Completion
    function handleTabCompletion() {
        if (!inputEl) inputEl = document.getElementById('command-input');
        const typed = inputEl.value.trim().toLowerCase();
        if (!typed) return;

        const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(typed));
        if (matches.length === 1) {
            inputEl.value = matches[0] + ' ';
        } else if (matches.length > 1) {
            const matchChips = matches.map(m => `<span class="cmd-chip" onclick="executeCommand('${m}')">${m}</span>`).join(' ');
            appendPromptEcho(typed);
            appendOutput(`<div class="cmd-result" style="color: var(--text-muted);">Possible completions: ${matchChips}</div>`);
            scrollToBottom();
        }
    }

    // CRT Toggle Handler
    function toggleCRT() {
        state.crtEnabled = !state.crtEnabled;
        if (state.crtEnabled) {
            document.body.classList.add('crt-enabled');
        } else {
            document.body.classList.remove('crt-enabled');
        }
    }

    // Command Handlers Implementation
    function getCVData() {
        return window.cvData || window.CV_DATA || {};
    }

    function handleHelp(args) {
        if (args.length > 0) {
            const target = args[0].toLowerCase();
            if (COMMANDS[target]) {
                return `
                    <div class="cmd-result">
                        <strong style="color: var(--accent-cyan);">${target}</strong> - ${COMMANDS[target].desc}<br/>
                        <span style="color: var(--accent-amber);">Usage:</span> <code>${COMMANDS[target].usage}</code>
                    </div>
                `;
            }
        }
        let rows = Object.keys(COMMANDS).map(cmd => {
            return `<tr><td><span class="cmd-chip" onclick="executeCommand('${cmd}')">${cmd}</span></td><td>${COMMANDS[cmd].desc}</td></tr>`;
        }).join('');

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-emerald); font-weight: 600; margin-bottom: 6px;">Available Terminal Commands:</div>
                <table class="term-table">
                    <thead><tr><th>Command</th><th>Description</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }

    function handleAbout() {
        const cv = getCVData();
        const ab = cv.about || {};
        const hd = cv.header || {};
        
        const bioHtml = ab.bio ? ab.bio.map(p => `<p style="margin-top: 6px; color: var(--text-primary);">${p}</p>`).join('') : '';
        const specsHtml = ab.specialisms ? ab.specialisms.map(s => `<span class="tag-badge tag-cyan">${s}</span>`).join(' ') : '';

        return `
            <div class="cmd-result">
                <h3 style="color: var(--accent-purple); margin-bottom: 4px;">${ab.name || hd.name || 'Harry Rogers'}</h3>
                <div style="color: var(--accent-cyan); font-weight: 500;">${ab.role || hd.title || 'Test & FPGA Verification Engineer'}</div>
                <div style="color: var(--accent-amber); margin: 6px 0;">
                    <span class="tag-badge tag-amber">${ab.award || 'IET Prize Winner 2026'}</span>
                    <span class="tag-badge tag-emerald">${ab.degree || 'First-Class BEng (Hons)'}</span>
                    <span class="tag-badge tag-purple">${ab.currentEmployer || 'Chess Dynamics'}</span>
                </div>
                ${bioHtml}
                <div style="margin-top: 10px;">
                    <strong style="color: var(--accent-emerald);">Key Specialisms:</strong><br/>
                    <div style="margin-top: 4px;">${specsHtml}</div>
                </div>
            </div>
        `;
    }

    function handleSkills(args) {
        const cv = getCVData();
        const sk = cv.skills || {};

        let catFilter = args.length > 0 ? args[0].toLowerCase() : null;

        const renderRow = (title, items, tagClass) => {
            const badges = items.map(i => `<span class="tag-badge ${tagClass}">${i}</span>`).join(' ');
            return `<tr><td style="font-weight: 600; min-width: 140px;">${title}</td><td>${badges}</td></tr>`;
        };

        let rows = '';
        if (!catFilter || catFilter === 'fpga') rows += renderRow('FPGA & HDL', sk.fpga || [], 'tag-cyan');
        if (!catFilter || catFilter === 'hil' || catFilter === 'automation') rows += renderRow('HIL & Automation', sk.hilAutomation || [], 'tag-amber');
        if (!catFilter || catFilter === 'electro-optics' || catFilter === 'optics') rows += renderRow('Electro-Optics', sk.electroOptics || [], 'tag-emerald');
        if (!catFilter || catFilter === 'protocols' || catFilter === 'hardware') rows += renderRow('Protocols & Hardware', sk.protocols || [], 'tag-purple');
        if (!catFilter || catFilter === 'software') rows += renderRow('Software & Tools', sk.software || [], 'tag-rose');

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-emerald); font-weight: 600; margin-bottom: 6px;">Technical Skills & Engineering Competencies:</div>
                <table class="term-table">
                    <thead><tr><th>Domain</th><th>Technologies & Tools</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }

    function handleExperience() {
        const cv = getCVData();
        const exp = cv.experience || [];

        const itemsHtml = exp.map(e => {
            const highlightsHtml = e.highlights ? e.highlights.map(h => `<li>${h}</li>`).join('') : '';
            const awardHtml = e.award ? `<div style="color: var(--accent-amber); font-weight: 600; margin-top: 4px;"><span class="tag-badge tag-amber">${e.award}</span></div>` : '';
            return `
                <div style="border-left: 3px solid var(--accent-cyan); padding-left: 12px; margin-bottom: 14px;">
                    <div style="color: var(--accent-cyan); font-weight: 700; font-size: 1rem;">${e.role} @ ${e.company}</div>
                    <div style="color: var(--text-muted); font-size: 0.85rem;">${e.location} • ${e.period} (${e.type})</div>
                    <p style="color: var(--text-primary); font-size: 0.88rem; margin: 4px 0;">${e.description}</p>
                    ${awardHtml}
                    <ul style="margin-left: 18px; margin-top: 6px; color: var(--text-primary); font-size: 0.88rem; line-height: 1.45;">
                        ${highlightsHtml}
                    </ul>
                </div>
            `;
        }).join('');

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-purple); font-weight: 600; margin-bottom: 10px;">Professional Experience Timeline:</div>
                ${itemsHtml}
            </div>
        `;
    }

    function handleProjects() {
        const cv = getCVData();
        const prj = cv.projects || [];

        const cardsHtml = prj.map(p => {
            const linkHtml = p.link ? `<div style="margin-top: 6px;"><a href="${p.link}" target="_blank" style="color: var(--accent-cyan); font-size: 0.85rem; text-decoration: underline;">View Live Dissertation / Project Details ↗</a></div>` : '';
            return `
                <div style="background: var(--bg-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong style="color: var(--accent-emerald); font-size: 0.98rem;">${p.name}</strong>
                        <span class="tag-badge tag-purple">${p.category}</span>
                    </div>
                    <div style="color: var(--accent-amber); font-size: 0.85rem; font-style: italic; margin-top: 2px;">${p.tagline}</div>
                    <p style="font-size: 0.88rem; color: var(--text-primary); margin: 6px 0;">${p.summary}</p>
                    ${linkHtml}
                </div>
            `;
        }).join('');

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 8px;">Featured Engineering Projects:</div>
                ${cardsHtml}
                <div style="color: var(--text-muted); font-size: 0.82rem;">Type <span class="cmd-chip" onclick="executeCommand('vaidar')">vaidar</span> for an architectural deep dive into the VAIDAR HIL Framework.</div>
            </div>
        `;
    }

    function handleEducation() {
        const cv = getCVData();
        const ed = cv.education || {};

        const modulesHtml = ed.modules ? ed.modules.map(m => `<li>${m}</li>`).join('') : '';

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-amber); font-weight: 700; font-size: 1.05rem;">${ed.degree || 'BEng (Hons) Electronic & Computer Engineering'}</div>
                <div style="color: var(--accent-emerald); font-weight: 600; margin-top: 2px;">Grade: ${ed.grade || 'First-Class Honours (1st Class)'}</div>
                <div style="color: var(--text-muted); font-size: 0.88rem;">${ed.institution || 'University of Brighton'} • Graduated ${ed.graduationYear || '2026'}</div>
                <div style="margin-top: 8px; color: var(--accent-purple); font-weight: 600;">Final Year Project:</div>
                <div style="color: var(--text-primary); font-size: 0.88rem;">${ed.finalProject || 'Distinction Grade (VAIDAR HIL Framework)'}</div>
                <div style="margin-top: 8px; color: var(--accent-cyan); font-weight: 600;">Key Course Modules:</div>
                <ul style="margin-left: 18px; margin-top: 4px; color: var(--text-primary); font-size: 0.88rem;">
                    ${modulesHtml}
                </ul>
                ${ed.certificatePdf ? `<div style="margin-top: 8px;"><a href="${ed.certificatePdf}" target="_blank" style="color: var(--accent-cyan); font-size: 0.85rem; text-decoration: underline;">View Verified Degree Certificate PDF ↗</a></div>` : ''}
            </div>
        `;
    }

    function handleAwards() {
        const cv = getCVData();
        const aw = cv.awards || [];

        const listHtml = aw.map(a => {
            const sigsHtml = a.signatories ? `<div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">Signatories: ${a.signatories.join(' • ')}</div>` : '';
            const linkHtml = a.badgeUrl ? `<div style="margin-top: 4px;"><a href="${a.badgeUrl}" target="_blank" style="color: var(--accent-cyan); font-size: 0.84rem; text-decoration: underline;">View Award Certificate PDF ↗</a></div>` : '';
            return `
                <div style="background: var(--bg-card); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong style="color: var(--accent-amber); font-size: 0.95rem;">${a.title}</strong>
                        <span class="tag-badge tag-amber">${a.status}</span>
                    </div>
                    <div style="color: var(--accent-cyan); font-size: 0.85rem;">${a.organization}</div>
                    <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 4px;">${a.description}</p>
                    ${sigsHtml}
                    ${linkHtml}
                </div>
            `;
        }).join('');

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-amber); font-weight: 600; margin-bottom: 8px;">Honors & Professional Distinctions:</div>
                ${listHtml}
            </div>
        `;
    }

    function handleContact() {
        const cv = getCVData();
        const ct = cv.contact || {};

        return `
            <div class="cmd-result">
                <div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 8px;">Contact & Professional Links:</div>
                <div style="line-height: 1.8; font-size: 0.9rem;">
                    <div><strong>Email:</strong> <a href="mailto:${ct.email}" style="color: var(--accent-emerald); text-decoration: underline;">${ct.email}</a></div>
                    <div><strong>Location:</strong> <span style="color: var(--text-primary);">${ct.location}</span></div>
                    <div><strong>Website:</strong> <a href="${ct.website}" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">${ct.website}</a></div>
                    <div><strong>LinkedIn:</strong> <a href="${ct.linkedin}" target="_blank" style="color: var(--accent-purple); text-decoration: underline;">${ct.linkedin}</a></div>
                    <div><strong>Master CV PDF:</strong> <a href="${ct.masterCvPdf}" target="_blank" style="color: var(--accent-amber); text-decoration: underline;">Download / View PDF ↗</a></div>
                    <div><strong>Degree Certificate PDF:</strong> <a href="${ct.degreeCertificatePdf}" target="_blank" style="color: var(--accent-amber); text-decoration: underline;">View BEng Certificate ↗</a></div>
                    <div><strong>IET Prize Badge PDF:</strong> <a href="${ct.ietBadgePdf}" target="_blank" style="color: var(--accent-amber); text-decoration: underline;">View IET Award Badge ↗</a></div>
                </div>
            </div>
        `;
    }

    function handleVaidar() {
        const cv = getCVData();
        const v = cv.vaidar || {};

        const featuresHtml = v.features ? v.features.map(f => `
            <div style="margin-top: 6px;">
                <strong style="color: var(--accent-cyan);">${f.name}:</strong> 
                <span style="color: var(--text-primary); font-size: 0.88rem;">${f.description}</span>
            </div>
        `).join('') : '';

        const codeSnippet = v.codeSnippet || `# Python VAIDAR API example\nimport vaidarsys as vdr\nfpga = vdr.Target(interface="COM3")\nruntime = vdr.Runtime(target=fpga)\nruntime.start_hil_loop()`;

        return `
            <div class="cmd-result">
                <pre class="ascii-banner" style="color: var(--accent-purple);">
  ___   ___   ___ _____   _   ___ 
 / \ \ / /_\ |_ _|   \ \ /_\ | _ \
 \ V / / _ \ | || |) | / _ \|   /
  \_/ /_/ \_\___|___/ /_/ \_\_|_|
                </pre>
                <div style="color: var(--accent-emerald); font-weight: 700; font-size: 1rem;">${v.name || 'VAIDAR Framework'} — ${v.fullName || 'Verification & AI for Digital Architecture Runtime'}</div>
                <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 2px;">${v.type} • ${v.institution}</div>
                <p style="margin-top: 8px; color: var(--text-primary); font-size: 0.88rem; line-height: 1.45;">${v.overview}</p>

                <div style="margin-top: 10px; border-left: 2px solid var(--accent-purple); padding-left: 10px;">
                    <div style="color: var(--accent-purple); font-weight: 600;">Key Architectural Innovations:</div>
                    ${featuresHtml}
                </div>

                <div style="margin-top: 10px; background: var(--bg-card); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border-color);">
                    <div style="color: var(--accent-amber); font-weight: 600;">Verification Metrics Achieved:</div>
                    <div style="font-size: 0.88rem; margin-top: 4px;">
                        • <strong>Logic Coverage Closure:</strong> <span style="color: var(--accent-emerald); font-weight: 700;">${v.results ? v.results.coverageClosure : '99.9%+'}</span><br/>
                        • <strong>Runtime Efficiency:</strong> <span style="color: var(--accent-cyan); font-weight: 700;">${v.results ? v.results.runtimeReduction : '65% reduction'}</span><br/>
                        • <strong>Academic Grade:</strong> <span style="color: var(--accent-purple); font-weight: 700;">${v.results ? v.results.grade : 'Distinction (1st Class)'}</span>
                    </div>
                </div>

                <div style="margin-top: 10px;">
                    <div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 4px;">Quickstart Python HIL API Example:</div>
                    <pre style="background: #000; color: #00FF66; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 0.82rem; overflow-x: auto;"><code>${escapeHtml(codeSnippet)}</code></pre>
                </div>

                ${v.link ? `<div style="margin-top: 8px;"><a href="${v.link}" target="_blank" style="color: var(--accent-cyan); font-size: 0.85rem; text-decoration: underline;">Explore Full Dissertation & Live Demo ↗</a></div>` : ''}
            </div>
        `;
    }

    function handleBanner() {
        const ascii = `
██╗  ██╗██████╗ 
██║  ██║██╔══██╗
███████║██████╔╝  H A R R Y   R O G E R S
██╔══██║██╔══██╗  Test & FPGA Verification Engineer
██║  ██║██║  ██║  IET Prize Winner 2026 | First-Class BEng
╚═╝  ╚═╝╚═╝  ╚═╝
        `;
        appendOutput(`
            <pre class="ascii-banner">${ascii}</pre>
            <div class="cmd-result" style="margin-bottom: 8px;">
                <span class="tag-badge tag-emerald">SYSTEM ONLINE</span>
                <span class="tag-badge tag-cyan">VAIDAR v2.6</span>
                <span class="tag-badge tag-purple">ZSH EMULATOR</span>
            </div>
            <div class="cmd-result" style="color: var(--text-muted); font-size: 0.85rem;">
                Type <span class="cmd-chip" onclick="executeCommand('help')">help</span> to view commands or click any action below:
            </div>
            <div class="quick-chips">
                <span class="cmd-chip" onclick="executeCommand('help')">help</span>
                <span class="cmd-chip" onclick="executeCommand('about')">about</span>
                <span class="cmd-chip" onclick="executeCommand('skills')">skills</span>
                <span class="cmd-chip" onclick="executeCommand('experience')">experience</span>
                <span class="cmd-chip" onclick="executeCommand('projects')">projects</span>
                <span class="cmd-chip" onclick="executeCommand('vaidar')">vaidar</span>
                <span class="cmd-chip" onclick="executeCommand('contact')">contact</span>
                <span class="cmd-chip" onclick="executeCommand('theme')">theme</span>
            </div>
        `);
        return null;
    }

    function handleClear() {
        if (!outputEl) outputEl = document.getElementById('terminal-output');
        if (outputEl) outputEl.innerHTML = '';
        return null;
    }

    function handleHistory() {
        if (state.historyStack.length === 0) {
            return `<div class="cmd-result" style="color: var(--text-muted);">No commands in history.</div>`;
        }
        const lines = state.historyStack.map((cmd, idx) => `<div>${idx + 1}  ${escapeHtml(cmd)}</div>`).join('');
        return `<div class="cmd-result"><div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 4px;">Command History:</div>${lines}</div>`;
    }

    function handleTheme(args) {
        const available = ['default', 'matrix', 'cyberpunk', 'amber', 'dracula'];
        if (args.length === 0) {
            const chips = available.map(t => `<span class="cmd-chip" onclick="executeCommand('theme ${t}')">${t}</span>`).join(' ');
            return `<div class="cmd-result">Active theme: <strong style="color: var(--accent-emerald);">${state.currentTheme}</strong>.<br/>Available themes: ${chips}</div>`;
        }
        const target = args[0].toLowerCase();
        if (available.includes(target)) {
            state.currentTheme = target;
            document.body.setAttribute('data-theme', target);
            const indicator = document.getElementById('theme-indicator');
            if (indicator) indicator.innerText = `Theme: ${target.charAt(0).toUpperCase() + target.slice(1)}`;
            return `<div class="cmd-result" style="color: var(--accent-emerald);">Theme switched to <strong>${target}</strong>.</div>`;
        }
        return `<div class="cmd-result" style="color: var(--accent-rose);">Invalid theme '${escapeHtml(target)}'. Choose from: ${available.join(', ')}</div>`;
    }

    function handleEcho(args) {
        return `<div class="cmd-result">${escapeHtml(args.join(' '))}</div>`;
    }

})();
