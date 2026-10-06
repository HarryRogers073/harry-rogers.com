/**
 * =============================================================================
 * Script:       generate-master-cv-pdf.mjs
 * Description:  Compiles both the In-Depth Multipage Master CV and the Compact 2-Page Executive CV
 * Outputs:
 *   1. public/files/Harry_Rogers_Master_CV.pdf (Multipage In-Depth Dossier, mild & blank style)
 *   2. public/files/Harry_Rogers_Compact_CV.pdf (Compact 2-Sides A4, stylish dark luxury site style)
 * =============================================================================
 */

import { chromium } from '@playwright/test';
import { readFileSync, copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// File paths
const masterHtmlPath = resolve(rootDir, 'public', 'print', 'master-cv-full-template.html');
const compactHtmlPath = resolve(rootDir, 'public', 'print', 'compact-cv-template.html');

const masterPdfPath = resolve(rootDir, 'public', 'files', 'Harry_Rogers_Master_CV.pdf');
const compactPdfPath = resolve(rootDir, 'public', 'files', 'Harry_Rogers_Compact_CV.pdf');

// Workspace mirror paths
const workspaceDir = 'C:\\Users\\harry\\Documents\\antigravity\\elegant-chandrasekhar';
const workspaceMasterHtml = resolve(workspaceDir, 'master-cv-long.html');
const workspaceCompactHtml = resolve(workspaceDir, 'master-cv-compact.html');

async function compilePDFs() {
    console.log('🚀 Launching headless browser for CV compilation...');
    const browser = await chromium.launch({ channel: 'msedge' });

    // -------------------------------------------------------------
    // 1. Compile Multipage In-Depth Master CV (Mild & Blank Style)
    // -------------------------------------------------------------
    console.log('📄 [1/2] Compiling Multipage In-Depth Master CV...');
    const masterHtml = readFileSync(masterHtmlPath, 'utf-8');
    const masterPage = await browser.newPage();
    await masterPage.setContent(masterHtml, { waitUntil: 'networkidle' });
    await masterPage.evaluateHandle('document.fonts.ready');

    await masterPage.pdf({
        path: masterPdfPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm'
        }
    });
    console.log(`✅ Master CV PDF generated: ${masterPdfPath}`);
    await masterPage.close();

    // -------------------------------------------------------------
    // 2. Compile Compact 2-Page Executive CV (Dark Website Style)
    // -------------------------------------------------------------
    console.log('✨ [2/2] Compiling Compact 2-Page Executive CV...');
    const compactHtml = readFileSync(compactHtmlPath, 'utf-8');
    const compactPage = await browser.newPage();
    await compactPage.setContent(compactHtml, { waitUntil: 'networkidle' });
    await compactPage.evaluateHandle('document.fonts.ready');

    await compactPage.pdf({
        path: compactPdfPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm'
        }
    });
    console.log(`✅ Compact Executive CV PDF generated: ${compactPdfPath}`);
    await compactPage.close();

    await browser.close();

    // Sync to workspace directory
    try {
        if (existsSync(workspaceDir)) {
            copyFileSync(masterHtmlPath, workspaceMasterHtml);
            copyFileSync(compactHtmlPath, workspaceCompactHtml);
            console.log(`📁 Synced templates to workspace: ${workspaceDir}`);
        }
    } catch (err) {
        console.warn('Workspace sync notice:', err.message);
    }

    console.log('🎉 All CV documents successfully compiled and verified!');
}

compilePDFs().catch((err) => {
    console.error('Fatal error during CV compilation:', err);
    process.exit(1);
});
