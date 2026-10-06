/**
 * =============================================================================
 * File:         cv-data.js
 * Written by:   Harry Rogers
 * Date:         October 2026
 * Description:  Verified engineering CV profile, educational records, and project dataset
 * =============================================================================
 */

(function() {
    'use strict';

    const cvData = {
        header: {
            name: "Harry Rogers",
            title: "Test & FPGA Verification Engineer",
            location: "Sussex / Brighton, United Kingdom",
            education: "BEng (Hons) Electronic & Computer Engineering (1st Class)",
            award: "IET Prize Winner 2026",
            summary: "Accomplished Test Engineer & FPGA Verification Specialist with First-Class BEng (Hons) in Electronic and Computer Engineering and recipient of the IET Prize 2026. Technical expertise spanning military-grade electro-optical surveillance system testing, hardware-in-the-loop (HIL) testbench design, and automated digital logic verification. Developer of VAIDAR, a novel Python-native execution engine bridging PyTorch models with Xilinx Artix-7 FPGA silicon for accelerated coverage closure."
        },

        about: {
            name: "Harry Rogers",
            role: "Test Engineer & FPGA Verification Specialist",
            currentEmployer: "Chess Dynamics",
            university: "University of Brighton",
            degree: "First-Class BEng (Hons) Electronic & Computer Engineering",
            award: "IET Prize Winner 2026",
            bio: [
                "Test Engineer at Chess Dynamics in Sussex, UK, specializing in electro-optical surveillance payloads, thermal imagers, pan-tilt gimbals, and automated test environments.",
                "Graduated with First-Class Honours from the University of Brighton, winning the prestigious IET Prize 2026 for academic distinction.",
                "Completed a 12-month industrial placement at BAE Systems in Systems Engineering (IV&V), building HIL testbench rigs and managing DOORS requirement traceability.",
                "Creator of VAIDAR: a Python-native Hardware-in-the-Loop AI verification framework for FPGA logic designs."
            ],
            specialisms: [
                "FPGA & Verilog Digital Logic Design",
                "Hardware-in-the-Loop (HIL) Test Benchmarking",
                "Electro-Optics & Target Collimation",
                "AI-Driven Stimulus Generation & NLP Log Triage",
                "FPV Avionics & High-Speed Telemetry"
            ]
        },

        vaidar: {
            name: "VAIDAR Framework",
            fullName: "Verification & Artificial Intelligence for Digital Architecture Runtime",
            type: "Final Year Dissertation Project (XE636) — 1st Distinction",
            institution: "University of Brighton",
            targetFPGA: "Xilinx Artix-7 FPGA (and Zynq-7000)",
            overview: "VAIDAR modernizes Hardware-in-the-Loop (HIL) FPGA verification by wrapping hardware interfaces in Python and deploying PyTorch AI models, eliminating the 70% lifecycle bottleneck of legacy verification.",
            features: [
                {
                    name: "Silicon-to-Software HIL Bridge",
                    description: "Establishes bi-directional Python-to-FPGA physical serial/PCIe/UART transport for real-time vector streaming."
                },
                {
                    name: "AI-Driven Stimulus Engine",
                    description: "Deploys PyTorch ML models to dynamically generate adaptive test vectors targeting unvisited FSM state-machine branches."
                },
                {
                    name: "Real-Time Anomaly Detection",
                    description: "Monitors physical FPGA execution, flagging timing glitches and power state anomalies before failure."
                },
                {
                    name: "Automated NLP Log Triage",
                    description: "Groups regression failures by root-cause signature using NLP and clustering algorithms without manual log sifting."
                }
            ],
            results: {
                coverageClosure: "99.9%+",
                runtimeReduction: "65% runtime reduction compared to constrained random test vectors",
                grade: "Distinction Grade (1st Class)"
            },
            codeSnippet: `import vaidarsys as vdr\n\n# Initialize FPGA target via serial interface\nfpga = vdr.Target(interface="COM3", baudrate=115200)\n\n# Load trained AI coverage agent model\nai_engine = vdr.Intelligence(model_path="models/alu_coverage_agent.pth")\n\n# Start smart HIL execution loop\nruntime = vdr.Runtime(target=fpga, intelligence=ai_engine)\nruntime.start_hil_loop(target_coverage=99.9)\n\n# Print verification metrics report\nprint(runtime.get_verification_report())`,
            link: "https://www.harry-rogers.com/dissertation-project"
        },

        experience: [
            {
                company: "Chess Dynamics",
                location: "Horsham, West Sussex, UK",
                role: "Hardware Test Engineer",
                period: "June 2026 – Present",
                type: "Full-Time",
                description: "Specialist defence & security enterprise manufacturing ultra-precise electro-optical tracking, surveillance, and gimbals.",
                highlights: [
                    "System-Level Verification & Testing: Coordinate comprehensive testing for multi-sensor electro-optical surveillance heads, pan-tilt gimbals, thermal imagers, and radar tracking assemblies.",
                    "Test Procedure Authoring: Author & execute formal Acceptance Test Procedures (ATP), Factory Acceptance Tests (FAT), and Site Acceptance Tests (SAT) under military & industrial standards.",
                    "Automated Test Suite Development: Design Python & hardware-based automated scripts for sensor calibration, optical target collation, and regression testing (40% setup time reduction).",
                    "Cross-Functional Fault Isolation: Isolate complex root-cause anomalies across multi-board microprocessors, video transmission protocols (Camera Link/SDI), and servo control feedback loops.",
                    "Instrumentation Mastery: Precision optical collimators, thermal blackbody targets, laser power meters, logic analyzers, and high-bandwidth digital storage oscilloscopes."
                ]
            },
            {
                company: "BAE Systems",
                location: "Rochester, Kent, UK",
                role: "Systems Engineer — Integration, Verification & Validation (IV&V) Placement",
                period: "June 2024 – June 2025",
                type: "12-Month Industrial Placement",
                description: "Global defence, aerospace, and security contractor developing mission systems.",
                highlights: [
                    "IV&V Lifecycle Execution: Executed end-to-end IV&V protocols for mission-critical hardware and electronic system architectures.",
                    "HIL Testbench Assembly & Rig Operation: Constructed, wired, and calibrated HIL testbenches with real-time signal injection and telemetry feedback loops.",
                    "Requirements Verification Traceability: Managed verification matrices in IBM DOORS mapping high-level system requirements to granular test cases with 100% audit compliance.",
                    "Protocol & Signal Integrity Analysis: Debugged MIL-STD-1553, ARINC 429, RS-422, and Ethernet protocols using protocol & logic analyzers.",
                    "Defect Logging & ERB Presentation: Documented non-conformance reports and presented formal verification summaries at Engineering Review Boards."
                ]
            }
        ],

        skills: {
            fpga: [
                "Verilog HDL", "VHDL", "Xilinx Vivado Design Suite", "Xilinx Artix-7", "Zynq-7000",
                "RTL Simulation (ModelSim/Vivado Simulator)", "Logic Synthesis", "XDC Constraints",
                "Static Timing Analysis (STA)", "Finite State Machines (FSM)"
            ],
            hilAutomation: [
                "Python HIL Test Engines", "PySerial", "Signal Injection Testbenches",
                "Automated Test Equipment (ATE)", "FAT/SAT Test Suites", "Automated Failure Triage"
            ],
            electroOptics: [
                "Electro-Optical Surveillance Payloads", "Thermal & Daylight Cameras", "Servo Gimbals",
                "Laser Rangefinders", "Acceptance Test Procedures (ATP)", "DOORS Traceability", "Fault Diagnostics"
            ],
            protocols: [
                "Oscilloscopes", "Logic Analyzers", "Spectrum Analyzers", "JTAG Boundary Scan",
                "UART", "PCIe", "Ethernet", "SPI", "I2C", "CAN Bus", "RS-422 / RS-485",
                "MIL-STD-1553", "ARINC 429", "Camera Link", "SDI", "CoaXPress"
            ],
            software: [
                "Python 3.x", "PyTorch", "NumPy / SciPy", "C / C++", "MATLAB / Simulink",
                "IBM DOORS", "Git", "CI/CD", "Linux"
            ]
        },

        education: {
            degree: "BEng (Hons) Electronic & Computer Engineering",
            grade: "First Class 80%",
            institution: "University of Brighton",
            graduationYear: "2026",
            modules: [
                "Digital Logic Design & Synthesis (Verilog / Vivado)",
                "Embedded Microprocessor Architectures (C / Assembly)",
                "Hardware Verification & Testing Methodologies",
                "Digital Signal Processing (DSP) & Control Systems",
                "RF Communications & High-Speed Data Links"
            ],
            finalProject: "Distinction Grade (VAIDAR HIL Framework)",
            certificatePdf: "https://drive.google.com/file/d/1AdEBtt5kGBFWuy3C_u3CsFVBmXnDHa-Z/view?usp=sharing"
        },

        awards: [
            {
                title: "The IET Prize 2026",
                organization: "The Institution of Engineering and Technology (IET)",
                status: "Winner",
                description: "Awarded for outstanding distinction and academic excellence in BEng Electronic & Computer Engineering at the University of Brighton.",
                signatories: ["Ed Almond (Chief Executive)", "Dawn Ohlson (IET President 2025-26)", "Warren East (Board of Trustees)"],
                badgeUrl: "https://drive.google.com/file/d/19GDAzXFtHfdsel3uywczHKlfzlRzslaX/view"
            },
            {
                title: "IET Sussex Prize 2023",
                organization: "The Institution of Engineering and Technology (IET)",
                status: "Winner",
                description: "Awarded for outstanding first-year academic performance in Analogue & Digital Electronics and Electrical Engineering at the University of Brighton."
            }
        ],

        projects: [
            {
                id: "vaidar",
                name: "VAIDAR Framework",
                tagline: "Verification & AI for Digital Architecture Runtime",
                category: "FPGA & AI Hardware Verification",
                summary: "Python-native HIL execution engine for Xilinx Artix-7 FPGAs with PyTorch adaptive stimulus and NLP failure triage.",
                link: "https://www.harry-rogers.com/dissertation-project"
            },
            {
                id: "electro-optics",
                name: "Automated Electro-Optical Target Collimation Test Bench",
                tagline: "Precision Optical Payload Calibration",
                category: "Test Engineering & Automation",
                summary: "Script-driven calibration routine for multi-spectral optical payloads synchronizing pan-tilt stages with IR blackbody emitters for MRTD and bore-sighting metrics."
            },
            {
                id: "fpv-avionics",
                name: "High-Speed FPV Avionics & Telemetry Systems",
                tagline: "Custom Flight Controllers & Telemetry",
                category: "Embedded & Systems Engineering",
                summary: "Custom FPV quadcopters with low-latency video, RF tuning, blackbox flight telemetry logging, PID optimization, and ESC timing."
            }
        ],

        contact: {
            email: "harry@harry-rogers.com",
            location: "Sussex, United Kingdom",
            website: "https://www.harry-rogers.com",
            dissertationLink: "https://www.harry-rogers.com/projects/vaidar-hil-framework",
            linkedin: "https://www.linkedin.com/in/harryrogers073/",
            github: "https://github.com/HarryRogers073",
            masterCvPdf: "/files/Harry_Rogers_Master_CV.pdf",
            compactCvPdf: "/files/Harry_Rogers_Compact_CV.pdf",
            degreeCertificatePdf: "https://drive.google.com/file/d/1AdEBtt5kGBFWuy3C_u3CsFVBmXnDHa-Z/view?usp=sharing",
            ietBadgePdf: "https://drive.google.com/file/d/19GDAzXFtHfdsel3uywczHKlfzlRzslaX/view"
        },

        commands: {
            help: "List all available terminal commands and usage examples",
            about: "Show Harry Rogers background, current role at Chess Dynamics, and academic honors",
            cv: "Alias for about command — display Master CV summary",
            skills: "Display organized matrix of FPGA, HIL, Electro-Optics, Protocol, and Software skills",
            experience: "List detailed professional work history (Chess Dynamics, BAE Systems)",
            projects: "Show featured engineering portfolio projects (VAIDAR, Optical Test Bench, FPV Avionics)",
            education: "Display degree credentials, University of Brighton details, and course modules",
            awards: "Display honors and professional distinctions (The IET Prize 2026, IET Sussex Prize 2023)",
            contact: "Display contact email, location, website, LinkedIn, and PDF document links",
            vaidar: "Deep dive into the VAIDAR HIL FPGA verification framework architecture & sample code",
            banner: "Print retro header ASCII banner",
            clear: "Clear output buffer",
            history: "View command input history log",
            theme: "Switch theme scheme (default, matrix, cyberpunk, amber, dracula)",
            echo: "Print custom text string to terminal output"
        }
    };

    // Attach to global window object
    if (typeof window !== 'undefined') {
        window.cvData = cvData;
        window.CV_DATA = cvData; // Alias for compatibility
    }

    // Export for Node environment if required
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cvData;
    }
})();
