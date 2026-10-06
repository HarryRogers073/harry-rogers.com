/**
 * =============================================================================
 * File:         profile.ts
 * Written by:   Harry Rogers
 * Date:         October 2026
 * Description:  Structured professional engineering profile and site metadata
 * =============================================================================
 */

/**
 * Single source of truth for personal/CV data used across the site.
 * Content migrated from the live Google Sites pages (Oct 2026).
 */

export const profile = {
  name: 'Harry Rogers',
  title: 'Hardware Test Engineer',
  tagline:
    'Hardware test engineer at Chess Dynamics. FPGA logic and hardware verification.',
  location: 'Sussex, UK',
  email: 'harry@harry-rogers.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harryrogers073/',
    github: 'https://github.com/HarryRogers073',
  },
  cvPdf: '/files/Harry_Rogers_Master_CV.pdf',
  ietCertificate: 'https://drive.google.com/file/d/19GDAzXFtHfdsel3uywczHKlfzlRzslaX/view',
  formEndpoint: 'https://formsubmit.co/ajax/harry@harry-rogers.com',
};

export const about = [
  'I’m a Hardware Test Engineer at Chess Dynamics in West Sussex, serving as the test department point of contact for Land Systems. My work focuses on verifying electro-optical directors and robotics for international defence programmes.',
  'I spend a lot of my time working with FPGAs and digital logic. For my final-year project, I built an automated hardware-in-the-loop test framework to verify physical Xilinx FPGAs against golden models using Python.',
  'I graduated from the University of Brighton with a First Class 80% degree in Electronic & Computer Engineering, and was awarded the IET Prize in 2026.',
  'Before joining Chess, I spent a year at BAE Systems working on integration and automated testbenches for electronic systems.',
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Hardware Test Engineer & Land IPT Test Point of Contact',
    company: 'Chess Dynamics',
    location: 'Horsham, West Sussex, UK',
    period: 'June 2026 – Present',
    type: 'Full-Time Industry',
    badge: 'Current Role | Land IPT Test Point of Contact',
    summary: 'Test department point of contact for Land Systems, conducting Factory Acceptance Testing and environmental qualification on Hawkeye electro-optical directors.',
    responsibilities: [
      'Act as the test department point of contact for the Land Integrated Portfolio Team (IPT), advising project managers on test scoping and feasibility.',
      'Run Factory Acceptance Testing (FAT) on Hawkeye electro-optical directors, verifying daylight optics, thermal imagers, and laser rangefinders.',
      'Perform board-level fault diagnosis across multi-layer PCBs, slip-ring comms (RS-422, CAN, Ethernet), and video pipelines.',
      'Conduct precision optical boresighting and laser rangefinder calibration.',
      'Manage environmental qualification, including thermal profiling and vibration testing to military specifications.',
      'Write FAT documentation, discrepancy logs, and standard operating procedures (SOPs).'
    ],
    skills: [
      'Land IPT Test Coordination',
      'Electro-Optic Directors',
      'Factory Acceptance Testing (FAT)',
      'Optical Boresighting & Calibration',
      'Hardware Diagnostics',
      'Slip-Ring Comms (RS-422, CAN, Ethernet)',
      'Video Processing Pipelines',
      'Environmental Qualification (ESS)',
      'Vibration Profiling'
    ]
  },
  {
    role: 'Systems Engineer — Integration, Verification & Validation (IV&V) Placement',
    company: 'BAE Systems',
    location: 'Rochester, Kent, UK',
    period: 'June 2024 – June 2025',
    type: '12-Month Industrial Placement',
    badge: 'Industrial Placement',
    summary: '12-month industrial placement working on integration and automated lab testbenches for electronic systems.',
    responsibilities: [
      'Developed Python-based automated test scripts for hardware/software integration and laboratory testbenches.',
      'Managed requirements traceability for electronic subsystems using IBM DOORS.',
      'Verified systems using signal injection, oscilloscopes, and Simulink models, including Frequency Response Analysis.',
      'Collaborated directly with software and systems teams to debug hardware anomalies and isolate root causes.',
      'Delivered \'STEM in a Box\' outreach to over 400 students across Kent as a certified STEM Ambassador.'
    ],
    skills: [
      'Python Automation',
      'IBM DOORS (DXL)',
      'Enterprise Architect',
      'IV&V Lifecycle',
      'Signal Injection',
      'Frequency Response Analysis',
      'Hardware Testbenches',
      'Requirements Traceability'
    ]
  },
  {
    role: 'Co-President, Vice President & Web Architect',
    company: 'Brighton Real Ale Society',
    location: 'University of Brighton, UK',
    period: 'October 2025 – June 2026',
    type: 'Executive Leadership & Development',
    badge: 'Student Society Leadership',
    summary: 'Elected executive leader managing society administration, financial budgeting, large-scale events, and engineering the organisation\'s official web platform.',
    responsibilities: [
      'Directed executive committee operations, organised weekly events for 100+ active members, and liaised with the Brighton Students\' Union on safety and event licensing.',
      'Architected, developed, and deployed the official society web platform using Next.js (React 19), Prisma ORM, and Supabase PostgreSQL with automated CI/CD on Vercel.',
      'Implemented member authentication, real-time leaderboard polling, dynamic event calendars, and historical venue archives.'
    ],
    skills: [
      'Executive Leadership',
      'Next.js',
      'React',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Budget Management',
      'Public Relations'
    ]
  },
  {
    role: 'Customer Service Assistant & Team Member',
    company: 'bp / M&S Simply Food',
    location: 'Sussex, UK',
    period: 'December 2023 – June 2026',
    type: 'Part-Time Employment',
    badge: 'Customer Operations',
    summary: 'Delivered frontline customer service and operational support in high-volume commercial retail while maintaining full-time academic excellence in engineering.',
    responsibilities: [
      'Provided customer-focused service in a high-turnover retail and forecourt setting, demonstrating exceptional reliability and team coordination.',
      'Managed stock inventory auditing, temperature tracking for fresh food compliance, and cash handling procedures.',
      'Enforced stringent forecourt health, safety, and hazardous materials protocols.'
    ],
    skills: [
      'Customer Communication',
      'Team Collaboration',
      'Health & Safety Compliance',
      'Inventory Management',
      'Conflict Resolution'
    ]
  },
  {
    role: 'Shift Manager',
    company: 'McDonald\'s',
    location: 'Eastleigh, Hampshire, UK',
    period: 'August 2020 – March 2024',
    type: 'Operations & Team Leadership',
    badge: 'Operational Leadership',
    summary: 'Led and coordinated operational shifts directing teams of up to 30 crew members in a high-tempo, time-critical commercial environment alongside university studies.',
    responsibilities: [
      'Directed front-of-house, kitchen, and drive-thru operations during peak trading hours, managing throughput and service speed under intense pressure.',
      'Oversaw daily shift labour scheduling, station rotations, and task assignments for teams of up to 30 personnel.',
      'Enforced rigorous compliance with food hygiene, health and safety, and food temperature auditing standards.',
      'Managed end-of-day register balancing, safe drops, cash reconciliation, and discrepancy investigations.',
      'Coached, onboarded, and mentored new team members, resolving customer escalations with diplomacy.'
    ],
    skills: [
      'Team Leadership',
      'Shift Scheduling',
      'High-Pressure Operations',
      'Cash Reconciliation',
      'Customer Conflict Resolution',
      'Quality & Hygiene Compliance'
    ]
  },
  {
    role: 'Bicycle Courier',
    company: 'Deliveroo',
    location: 'Brighton, UK',
    period: 'September 2023 – June 2024',
    type: 'Independent Logistics',
    badge: 'Urban Logistics',
    summary: 'Managed time-critical urban delivery routes across Brighton, maintaining high reliability and navigational efficiency.',
    responsibilities: [
      'Executed on-demand food logistics across complex urban topography under strict delivery time windows.',
      'Maintained professional equipment and sustained high customer satisfaction ratings through rapid, careful transport.'
    ],
    skills: [
      'Time Management',
      'Route Optimisation',
      'Urban Navigation',
      'Self-Motivation'
    ]
  },
  {
    role: 'Volunteer Computer Refurbisher',
    company: 'Jamie\'s Computers',
    location: 'Southampton, UK',
    period: 'May 2021 – October 2021',
    type: 'Voluntary Engineering Support',
    badge: 'Community Hardware Support',
    summary: 'Volunteered in hardware diagnostics, component harvesting, and PC refurbishment for local community reuse.',
    responsibilities: [
      'Disassembled, diagnosed, and repaired legacy desktop and laptop computers.',
      'Tested RAM modules, storage drives, and power supplies to salvage reusable components for low-income households and charities.',
      'Performed secure disk wiping and operating system installations.'
    ],
    skills: [
      'PC Hardware Repair',
      'Component Harvesting',
      'Hardware Diagnostics',
      'Secure Data Sanitisation'
    ]
  }
];

export type Role = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    role: 'Hardware Test Engineer & Land IPT Test Point of Contact',
    company: 'Chess Dynamics',
    location: 'Horsham, West Sussex, UK',
    period: 'June 2026 – Present',
    highlights: [
      'Test department point of contact for the Land Integrated Portfolio Team (IPT), advising project managers on test scoping and feasibility.',
      'Run Factory Acceptance Testing (FAT) on Hawkeye electro-optical directors, verifying daylight optics, thermal imagers, and laser rangefinders.',
      'Board-level fault diagnosis across multi-layer PCBs, slip-ring comms (RS-422, CAN, Ethernet), and video pipelines.',
      'Conduct precision optical boresighting and laser rangefinder calibration.',
      'Manage environmental qualification, including thermal profiling and vibration testing to military specifications.',
    ],
  },
  {
    role: 'Systems Engineer — Integration, Verification & Validation (IV&V) Placement',
    company: 'BAE Systems',
    location: 'Rochester, Kent, UK',
    period: 'June 2024 – June 2025',
    highlights: [
      'Worked across the Integration, Verification & Validation (IV&V) lifecycle for electronic systems.',
      'Developed Python-based automated test scripts for hardware/software integration and laboratory testbenches.',
      'Managed requirements traceability for electronic subsystems using IBM DOORS.',
      'Verified systems using signal injection, oscilloscopes, and Simulink models, including Frequency Response Analysis.',
      'Collaborated directly with software and systems teams to debug hardware anomalies and isolate root causes.',
      'Delivered “STEM in a Box” outreach to 400+ students across Kent as a certified STEM Ambassador.',
    ],
  },
];

export const otherWork = [
  { role: 'Customer Service Assistant & Team Member', company: 'bp / M&S Simply Food', period: 'Dec 2023 – June 2026' },
  { role: 'Bicycle Courier', company: 'Deliveroo', period: 'Sept 2023 – June 2024' },
  { role: 'Shift Manager', company: 'McDonald’s', period: 'Aug 2020 – Mar 2024' },
  { role: 'Volunteer Computer Refurbisher', company: 'Jamie’s Computers', period: 'May 2021 – Oct 2021' },
];

export const education = {
  institution: 'University of Brighton',
  degree: 'BEng (Hons) Electronic & Computer Engineering',
  period: '2022 – 2026',
  result: 'First Class 80%',
  modules: [
    { level: 'Level 6 (2025/26)', items: [
      ['Individual Project (VAIDAR, IET Prize Winner)', 91],
      ['Communications & Network Architecture', 90],
      ['Embedded Systems 3 (MATLAB Oscilloscope)', 84],
      ['Digital Signal Processing (Audio Crossover)', 68],
      ['Product Design (Energy Storage NPD)', 62],
    ] },
    { level: 'Level 5 (2023/24)', items: [
      ['Digital Systems Design (FPGA VHDL Lift Controller)', 84],
      ['Engineering Design (Robot Wars Combat Buggy, 2nd Place)', 82],
      ['Embedded Systems 2 (Autonomous Sensor Buggy)', 79],
      ['Electrical Engineering 2 (3-Phase Power & Machines)', 76],
      ['Analogue Electronics and Communications (AM Radio)', 70],
      ['Control and Applications (92% in MATLAB Exam)', 70],
    ] },
    { level: 'Level 4 (2022/23)', items: [
      ['Analogue & Digital Electronics 1 (IET Sussex Prize)', 87],
      ['Introduction to Electrical Engineering', 87],
      ['Engineering Mathematics (Differential Equations)', 84],
      ['Embedded Systems 1 (Assembly & Architecture)', 79],
      ['Engineering Practice (Electronic CAD, PCB & LTspice)', 69],
      ['Analogue & Digital Electronics 2 (Multistage Amplifiers)', 62],
    ] },
  ] as { level: string; items: [string, number][] }[],
};

export interface RankedModule {
  rank: number;
  name: string;
  level: string;
  grade?: number;
  gradeLabel: string;
  specialismBadge: string;
  award?: string;
  summary: string;
  tech: string[];
  projectSlug?: string;
}

export const rankedModules: RankedModule[] = [
  {
    rank: 1,
    name: 'Individual Project (Automated FPGA Hardware-in-the-Loop Test Framework — VAIDAR)',
    level: 'Level 6 (Final Year)',
    grade: 91,
    gradeLabel: 'First Class 91% (A+)',
    specialismBadge: 'Flagship | FPGA HIL Verification',
    award: 'IET Prize Winner 2026',
    summary: 'Built an automated hardware-in-the-loop verification framework bridging Python to a physical AMD Xilinx Artix-7 FPGA. It runs tests at ~1,000Hz over UART, checking physical silicon behaviour against golden models.',
    tech: ['AMD Xilinx Artix-7', 'Vivado', 'Verilog HDL', 'Python', 'Google Gemini API', 'PySerial', 'HIL Testing', 'UART'],
    projectSlug: 'vaidar-hil-framework'
  },
  {
    rank: 2,
    name: 'Engineering Design (Autonomous Combat Robotics & High-Current Motor Drives)',
    level: 'Level 5 (Second Year)',
    grade: 82,
    gradeLabel: 'First Class 82% (A+)',
    specialismBadge: 'Robotics & High-Current Power Electronics',
    award: '2nd Place University Championship',
    summary: 'Built a combat robot that placed 2nd in the university championship. Designed custom motor drivers and CAD chassis.',
    tech: ['MOSFET Dual H-Bridge', 'SolidWorks CAD', 'Proteus VSM', 'Microchip PIC', 'Combat Robotics', 'High-Torque DC Motors'],
    projectSlug: 'robot-wars-combat-platform'
  },
  {
    rank: 3,
    name: 'Digital Systems Design (FPGA Digital Systems & VHDL Architecture)',
    level: 'Level 5 (Second Year)',
    grade: 84,
    gradeLabel: 'First Class 84% (A+)',
    specialismBadge: 'Digital RTL & FSM Architecture',
    summary: 'Wrote VHDL to control a multi-floor elevator on an FPGA, implementing state machines and safety interlocks.',
    tech: ['IEEE VHDL', 'Intel DE0-Nano FPGA', 'Quartus Prime', 'ModelSim', 'Finite State Machines (FSM)', 'RTL Design'],
    projectSlug: 'vhdl-digital-systems'
  },
  {
    rank: 4,
    name: 'Embedded Systems 2 (Autonomous Sensor Navigation & Embedded C)',
    level: 'Level 5 (Second Year)',
    grade: 79,
    gradeLabel: 'First Class 79% (A)',
    specialismBadge: 'Autonomous Microcontroller Systems',
    summary: 'Built an autonomous obstacle-navigating robot in C using dual PIC microcontrollers to handle sonar timing, motor steering, and sensor data.',
    tech: ['Embedded XC8 C', 'Dual PIC Microcontrollers', 'HC-SR04 Ultrasonic Sonar', 'ADC Thermistor', 'Dual HD44780 LCDs', 'Wall-Following'],
    projectSlug: 'autonomous-sensor-buggy'
  },
  {
    rank: 5,
    name: 'Communications & Network Architecture (Enterprise Networks & RF Systems)',
    level: 'Level 6 (Final Year)',
    grade: 90,
    gradeLabel: 'First Class 90% (A+)',
    specialismBadge: 'Telecommunications & RF Systems',
    summary: 'Simulated WAN/LAN networks with dynamic routing and VLANs in Packet Tracer. Analysed cellular frequency re-use and RF links.',
    tech: ['Cisco Packet Tracer', 'ISO-OSI 7-Layer', 'TCP/IP', 'OSPF / RIP', 'ATM Switching', 'Cellular RF & Broadcasting'],
    projectSlug: 'communications-network-architecture'
  },
  {
    rank: 6,
    name: 'Embedded Systems 3 (Virtual Instrumentation & Real-Time Telemetry)',
    level: 'Level 6 (Final Year)',
    grade: 84,
    gradeLabel: 'First Class 84% (A+)',
    specialismBadge: 'Virtual Instrumentation & Telemetry',
    summary: 'Built a MATLAB desktop app that turned a microcontroller into a live dual-channel oscilloscope, with real-time plotting and variable sampling.',
    tech: ['MATLAB App Designer', 'Serial Protocol Telemetry', 'Real-Time Signal Plotting', 'ADC Sampling Modulation', 'Virtual Instruments'],
    projectSlug: 'matlab-projects'
  },
  {
    rank: 7,
    name: 'Digital Signal Processing (LTI Audio Crossover & Microcontroller DSP)',
    level: 'Level 6 (Final Year)',
    grade: 68,
    gradeLabel: 'Upper Second Class 68%',
    specialismBadge: 'Digital Signal Processing & Filter Design',
    summary: 'Designed digital FIR and IIR crossover filters for loudspeakers in MATLAB, and wrote real-time audio filtering code for microcontrollers.',
    tech: ['MATLAB DSP Toolbox', 'FIR & IIR Filters', 'Butterworth / Chebyshev', 'FFT Spectral Analysis', 'Microcontroller DSP'],
    projectSlug: 'matlab-projects'
  },
  {
    rank: 8,
    name: 'Analogue Electronics and Communications (AM RF Systems & OpAmp Circuits)',
    level: 'Level 5 (Second Year)',
    grade: 70,
    gradeLabel: 'First Class 70% (A-)',
    specialismBadge: 'Analogue RF Circuits & Communications',
    summary: 'Built discrete analogue circuits on copper, including a working AM radio receiver, an op-amp light meter, and a 555 timer LED dimmer.',
    tech: ['AM Radio Superhet Receiver', 'Tuned LC RF Circuits', 'LM358 Operational Amplifiers', '555/556 Timers', 'PWM Dimming', 'Veroboard']
  },
  {
    rank: 9,
    name: 'Control and Applications (LTI System Modelling & Closed-Loop PID Control)',
    level: 'Level 5 (Second Year)',
    grade: 70,
    gradeLabel: 'First Class 70% (A-) — First Class 92% in MATLAB Exam',
    specialismBadge: 'Closed-Loop Control & Dynamic Stability',
    summary: 'Modelled physical motor systems and tuned closed-loop PID controllers in MATLAB, validating the response on physical hardware.',
    tech: ['MATLAB pidTuner', 'Simulink', 'Laplace & z-Transforms', 'Bode & Nyquist Plots', 'Root Locus', 'Hardware Plant Tuning']
  },
  {
    rank: 10,
    name: 'Embedded Systems 1 (Microcontroller Architectures & Bare-Metal MPASM)',
    level: 'Level 4 (First Year)',
    grade: 79,
    gradeLabel: 'First Class 79% (A)',
    specialismBadge: 'Low-Level Assembly & Microprocessors',
    summary: 'Wrote bare-metal MPASM assembly for PIC microcontrollers, handling hardware timers, cycle-accurate logic, and direct I/O port control.',
    tech: ['Microchip MPASM', 'PIC16 Architecture', 'Cycle Timing', 'Hardware Timers', 'Direct Port I/O', 'Assembly Logic'],
    projectSlug: 'pic-microcontroller-code'
  },
  {
    rank: 11,
    name: 'Engineering Practice (Electronic CAD, PCB Design & SPICE Simulation)',
    level: 'Level 4 (First Year)',
    grade: 69,
    gradeLabel: 'Upper Second Class 69%',
    specialismBadge: 'Electronic CAD & PCB Simulation',
    summary: 'Captured schematics and routed single-sided PCBs. Ran LTspice AC frequency sweeps and transient signal integrity simulations.',
    tech: ['Proteus Ares PCB', 'Altium Designer', 'LTspice XVII', 'AC Frequency Sweeps', 'Transient Analysis', 'PCB Routing Rules']
  },
  {
    rank: 12,
    name: 'Analogue & Digital Electronics 1 (Semiconductor Physics & Logic Design)',
    level: 'Level 4 (First Year)',
    grade: 87,
    gradeLabel: 'First Class 87% (A+)',
    specialismBadge: 'Fundamental Semiconductor Electronics',
    award: 'Contributed to IET Sussex Prize',
    summary: 'Studied BJT/MOSFET transistor switching, active op-amp circuits, and combinational logic. Won the IET Sussex Prize for first-year performance.',
    tech: ['BJT & MOSFET Transistors', 'Operational Amplifiers', 'Combinational Logic', 'Karnaugh Maps', 'Laboratory Test Equipment']
  },
  {
    rank: 13,
    name: 'Introduction to Electrical Engineering (Electromagnetics & Network Analysis)',
    level: 'Level 4 (First Year)',
    grade: 87,
    gradeLabel: 'First Class 87% (A+)',
    specialismBadge: 'Electromagnetics & Network Analysis',
    award: 'Contributed to IET Sussex Prize',
    summary: 'Studied foundational electrical physics, including AC phasor analysis, Thévenin equivalents, reactive impedance, and magnetic circuits.',
    tech: ['Circuit Network Theorems', 'Thévenin/Norton Analysis', 'AC Phasor Analysis', 'Reactive Impedance', 'Magnetic Circuits']
  },
  {
    rank: 14,
    name: 'Electrical Engineering 2 (Three-Phase Power & Industrial Machines)',
    level: 'Level 5 (Second Year)',
    grade: 76,
    gradeLabel: 'First Class 76% (A)',
    specialismBadge: 'Three-Phase Power & Electrical Machines',
    summary: 'Analysed 3-phase AC power systems, transformer core saturation, induction motor torque curves, and power factor correction.',
    tech: ['3-Phase Star/Delta Systems', 'Induction Motors', 'Power Transformers', 'Power Factor Correction', 'BS 7671 Wiring Regulations']
  },
  {
    rank: 15,
    name: 'Analogue & Digital Electronics 2 (Multistage Amplifiers & Sequential Logic)',
    level: 'Level 4 (First Year)',
    grade: 62,
    gradeLabel: 'Upper Second Class 62%',
    specialismBadge: 'Multistage Amplifiers & Sequential Memory',
    summary: 'Designed multistage BJT amplifiers and analysed differential input stages alongside sequential digital logic like flip-flops and counters.',
    tech: ['Multistage BJT Amplifiers', 'Differential Pairs', 'Frequency Response Cutoffs', 'Sequential Logic', 'Flip-Flops & Counters']
  },
  {
    rank: 16,
    name: 'Engineering Mathematics (Differential Equations & Numerical Methods)',
    level: 'Level 4 (First Year)',
    grade: 84,
    gradeLabel: 'First Class 84% (A+)',
    specialismBadge: 'Differential Equations & Numerical Solvers',
    summary: 'Solved 2nd-order differential equations for RLC circuits, Laplace transforms, Fourier series, and developed numerical solvers in MATLAB.',
    tech: ['2nd-Order Differential Equations', 'Laplace Transforms', 'Fourier Series', 'Linear Algebra & Matrices', 'MATLAB Numerical Solvers']
  },
  {
    rank: 17,
    name: 'Product Design (Systems Engineering & Commercial Feasibility)',
    level: 'Level 6 (Final Year)',
    grade: 62,
    gradeLabel: 'Upper Second Class 62%',
    specialismBadge: 'Product Engineering & Systems Feasibility',
    summary: 'Acted as systems engineer in an interdisciplinary team to develop a commercial grid energy storage concept, applying NPD stage-gate methods.',
    tech: ['New Product Development (NPD)', 'Stage-Gate Pitching', 'Techno-Economic Feasibility', 'Gantt Planning', 'Commercial Viability']
  }
];

export const awards = [
  { title: 'The IET Prize', org: 'The Institution of Engineering and Technology', year: '2026' },
  { title: 'IET Sussex Prize', org: 'The Institution of Engineering and Technology', year: '2023' },
];

export const skills: Record<string, string[]> = {
  'FPGA & RTL': ['Verilog', 'VHDL', 'RTL development', 'FSMs', 'ALU design', 'Vivado', 'Quartus II', 'ModelSim'],
  'Software & Scripting': ['Python', 'Embedded C', 'C++', 'MATLAB', 'DXL (DOORS)', 'JavaScript / TypeScript', 'HTML/CSS', 'Gemini API'],
  'Hardware & IV&V': ['HIL verification', 'Electro-Optical Directors', 'Signal injection', 'Oscilloscopes', 'Logic analysers', 'JTAG', 'UART', 'I2C'],
  'Systems Engineering': ['Requirements management', 'IBM DOORS', 'Enterprise Architect', 'Simulink', 'Git', 'CI/CD'],
};

export const leadership = [
  { role: 'Co-President, Vice President & Web Architect', org: 'Brighton Real Ale Society', period: 'Oct 2025 – June 2026' },
  { role: 'VP Finance', org: 'University Engineering Society', period: 'Sept 2023 – June 2024' },
  { role: 'STEM Ambassador', org: 'BAE Systems', period: 'June 2024 – June 2025' },
];

export const interests = ['Custom PC building', 'FPV drone flying', '3D printing', 'Bouldering'];

