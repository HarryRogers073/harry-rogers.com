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
  email: 'harryrogers073@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harryrogers073/',
    github: 'https://github.com/HarryRogers073',
  },
  cvPdf: '/files/Harry_Rogers_Master_CV.pdf',
  ietCertificate: 'https://drive.google.com/file/d/19GDAzXFtHfdsel3uywczHKlfzlRzslaX/view',
  formEndpoint: 'https://formsubmit.co/ajax/harryrogers073@gmail.com',
};

export const about = [
  'I’m a Hardware Test Engineer at Chess Dynamics in West Sussex, where I lead test operations for the Land Systems division. My work focuses on verifying electro-optical directors and robotics for international defence programmes.',
  'I spend a lot of my time working with FPGAs and digital logic. For my final-year project, I built an automated hardware-in-the-loop test framework to verify physical Xilinx FPGAs against golden models using Python.',
  'I graduated from the University of Brighton with a First-Class degree in Electronic & Computer Engineering, and was awarded the IET Prize in 2026.',
  'Before joining Chess, I spent a year at BAE Systems working on integration and automated testbenches for avionics hardware.',
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
      'Test lead for the Land Systems division, advising project managers on test scoping and feasibility.',
      'Run Factory Acceptance Testing (FAT) on Hawkeye electro-optical directors, verifying daylight optics, thermal imagers, and laser rangefinders.',
      'Board-level fault diagnosis across multi-layer PCBs, slip-ring comms (RS-422, CAN, Ethernet), and video pipelines.',
      'Environmental qualification, including thermal profiling and vibration testing to military specifications.',
    ],
  },
  {
    role: 'Systems Engineering Industrial Placement',
    company: 'BAE Systems (Electronic Systems)',
    location: 'Rochester, UK',
    period: 'June 2024 – June 2025',
    highlights: [
      'Worked across the Integration, Verification & Validation (IV&V) lifecycle.',
      'Python test automation and frequency response analysis.',
      'Requirements management in IBM DOORS.',
      'STEM Ambassador: delivered “STEM in a Box” outreach to 400+ students.',
    ],
  },
];

export const otherWork = [
  { role: 'Customer Service Assistant', company: 'bp / M&S Simply Food', period: 'Dec 2023 – June 2026' },
  { role: 'Bicycle Courier', company: 'Deliveroo', period: 'Sept 2023 – June 2024' },
  { role: 'Shift Manager', company: 'McDonald’s', period: 'Mar 2020 – Mar 2024' },
  { role: 'Volunteer Computer Refurbisher', company: 'Jamie’s Computers', period: 'May 2021 – Oct 2021' },
];

export const education = {
  institution: 'University of Brighton',
  degree: 'BEng (Hons) Electronic & Computer Engineering',
  period: '2022 – 2026',
  result: 'First-Class Honours (80% overall)',
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
    gradeLabel: '91% (Distinction, A+)',
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
    gradeLabel: '82% (Distinction, A+)',
    specialismBadge: 'Robotics & High-Current Power Electronics',
    award: '2nd Place University Championship',
    summary: 'Engineered a high-reliability combat robotics platform that achieved 2nd place in the university championship tournament. Designed custom discrete MOSFET dual H-bridge motor drivers with flyback suppression and structural CAD chassis.',
    tech: ['MOSFET Dual H-Bridge', 'SolidWorks CAD', 'Proteus VSM', 'Microchip PIC', 'Combat Robotics', 'High-Torque DC Motors'],
    projectSlug: 'robot-wars-combat-platform'
  },
  {
    rank: 3,
    name: 'Digital Systems Design (FPGA Digital Systems & VHDL Architecture)',
    level: 'Level 5 (Second Year)',
    grade: 84,
    gradeLabel: '84% (Distinction, A+)',
    specialismBadge: 'Digital RTL & FSM Architecture',
    summary: 'Designed and synthesised a complete multi-floor commercial elevator controller in IEEE VHDL for an Intel/Altera DE0-Nano FPGA. Implemented concurrent Finite State Machines (FSMs), dynamic request queuing, priority scheduling, door interlock safety, and 7-segment display multiplexers.',
    tech: ['IEEE VHDL', 'Intel DE0-Nano FPGA', 'Quartus Prime', 'ModelSim', 'Finite State Machines (FSM)', 'RTL Design'],
    projectSlug: 'vhdl-digital-systems'
  },
  {
    rank: 4,
    name: 'Embedded Systems 2 (Autonomous Sensor Navigation & Embedded C)',
    level: 'Level 5 (Second Year)',
    grade: 79,
    gradeLabel: '79% (Distinction, A)',
    specialismBadge: 'Autonomous Microcontroller Systems',
    summary: 'Built an autonomous obstacle-navigating ground vehicle in Embedded C. Coordinated dual Microchip PIC microcontrollers: master PIC performing microsecond HC-SR04 sonar pulse timing and motor PWM steering, slave PIC acquiring ADC thermistor data and updating dual HD44780 LCDs.',
    tech: ['Embedded XC8 C', 'Dual PIC Microcontrollers', 'HC-SR04 Ultrasonic Sonar', 'ADC Thermistor', 'Dual HD44780 LCDs', 'Wall-Following'],
    projectSlug: 'autonomous-sensor-buggy'
  },
  {
    rank: 5,
    name: 'Communications & Network Architecture (Enterprise Networks & RF Systems)',
    level: 'Level 6 (Final Year)',
    grade: 90,
    gradeLabel: '90% (Distinction, A+)',
    specialismBadge: 'Telecommunications & RF Systems',
    summary: 'Simulated and evaluated resilient enterprise WAN/LAN topologies with redundant dynamic routing (OSPF, RIP) and VLAN segmentation in Cisco Packet Tracer. Conducted mathematical analysis of ATM cell switching, cellular GSM/LTE frequency re-use, and digital broadcast RF links.',
    tech: ['Cisco Packet Tracer', 'ISO-OSI 7-Layer', 'TCP/IP', 'OSPF / RIP', 'ATM Switching', 'Cellular RF & Broadcasting'],
    projectSlug: 'communications-network-architecture'
  },
  {
    rank: 6,
    name: 'Embedded Systems 3 (Virtual Instrumentation & Real-Time Telemetry)',
    level: 'Level 6 (Final Year)',
    grade: 84,
    gradeLabel: '84% (Distinction, A+)',
    specialismBadge: 'Virtual Instrumentation & Telemetry',
    summary: 'Developed a standalone desktop instrument in MATLAB App Designer that turned an external microcontroller into a live dual-channel digital oscilloscope, featuring real-time waveform plotting, dynamic ADC sampling rate modulation, and trigger holdoffs.',
    tech: ['MATLAB App Designer', 'Serial Protocol Telemetry', 'Real-Time Signal Plotting', 'ADC Sampling Modulation', 'Virtual Instruments'],
    projectSlug: 'matlab-projects'
  },
  {
    rank: 7,
    name: 'Digital Signal Processing (LTI Audio Crossover & Microcontroller DSP)',
    level: 'Level 6 (Final Year)',
    grade: 68,
    gradeLabel: '68% (Merit, B+)',
    specialismBadge: 'Digital Signal Processing & Filter Design',
    summary: 'Designed 3-way acoustic loudspeaker crossover filters using Linear Time-Invariant (LTI) FIR and IIR digital structures. Synthesised filter coefficient tables in MATLAB, conducted FFT spectral analysis on raw audio streams, and implemented real-time filtering routines for 8-bit microcontrollers.',
    tech: ['MATLAB DSP Toolbox', 'FIR & IIR Filters', 'Butterworth / Chebyshev', 'FFT Spectral Analysis', 'Microcontroller DSP'],
    projectSlug: 'matlab-projects'
  },
  {
    rank: 8,
    name: 'Analogue Electronics and Communications (AM RF Systems & OpAmp Circuits)',
    level: 'Level 5 (Second Year)',
    grade: 70,
    gradeLabel: '70% (Merit, A-)',
    specialismBadge: 'Analogue RF Circuits & Communications',
    summary: 'Engineered discrete analogue electronics on copper: assembled a working superheterodyne AM MW/LW radio receiver picking up over-the-air broadcasts with tuned LC tanks, built a precision LM358 operational amplifier light meter, and created a 555/556 PWM LED dimmer on Veroboard.',
    tech: ['AM Radio Superhet Receiver', 'Tuned LC RF Circuits', 'LM358 Operational Amplifiers', '555/556 Timers', 'PWM Dimming', 'Veroboard']
  },
  {
    rank: 9,
    name: 'Control and Applications (LTI System Modelling & Closed-Loop PID Control)',
    level: 'Level 5 (Second Year)',
    grade: 70,
    gradeLabel: '70% (Merit, A-) — 92% in MATLAB Exam',
    specialismBadge: 'Closed-Loop Control & Dynamic Stability',
    summary: 'Derived 1st and 2nd-order transfer functions for physical motor plants using Laplace and z-transforms. Simulated frequency-domain Bode plots and damping ratios, and tuned closed-loop PI/PID feedback controllers in MATLAB pidTuner, validating settling times on bench hardware.',
    tech: ['MATLAB pidTuner', 'Simulink', 'Laplace & z-Transforms', 'Bode & Nyquist Plots', 'Root Locus', 'Hardware Plant Tuning']
  },
  {
    rank: 10,
    name: 'Embedded Systems 1 (Microcontroller Architectures & Bare-Metal MPASM)',
    level: 'Level 4 (First Year)',
    grade: 79,
    gradeLabel: '79% (Distinction, A)',
    specialismBadge: 'Low-Level Assembly & Microprocessors',
    summary: 'Bare-metal assembly programming and microprocessor architecture: coded clock-cycle-accurate instruction sequences in pure MPASM, configured hardware timers, handled status register banking, and controlled peripheral I/O ports for hardware traffic light controllers.',
    tech: ['Microchip MPASM', 'PIC16 Architecture', 'Cycle Timing', 'Hardware Timers', 'Direct Port I/O', 'Assembly Logic'],
    projectSlug: 'pic-microcontroller-code'
  },
  {
    rank: 11,
    name: 'Engineering Practice (Electronic CAD, PCB Design & SPICE Simulation)',
    level: 'Level 4 (First Year)',
    grade: 69,
    gradeLabel: '69% (Merit, B+)',
    specialismBadge: 'Electronic CAD & PCB Simulation',
    summary: 'End-to-end electronic computer-aided design: captured schematics, routed single-sided printed circuit boards adhering to physical DRC clearances, and executed LTspice AC frequency sweeps (1 Hz to 1 MHz) and transient square-wave signal integrity simulations into resistive loads.',
    tech: ['Proteus Ares PCB', 'Altium Designer', 'LTspice XVII', 'AC Frequency Sweeps', 'Transient Analysis', 'PCB Routing Rules']
  },
  {
    rank: 12,
    name: 'Analogue & Digital Electronics 1 (Semiconductor Physics & Logic Design)',
    level: 'Level 4 (First Year)',
    grade: 87,
    gradeLabel: '87% (Distinction, A+)',
    specialismBadge: 'Fundamental Semiconductor Electronics',
    award: 'Contributed to IET Sussex Prize',
    summary: 'Fundamental semiconductor electronics, BJT/MOSFET transistor switching and biasing, active operational amplifier circuits, Boolean algebra, and Karnaugh map logic gate reduction. Contributed to winning the IET Sussex Prize for most meritorious first-year performance.',
    tech: ['BJT & MOSFET Transistors', 'Operational Amplifiers', 'Combinational Logic', 'Karnaugh Maps', 'Laboratory Test Equipment']
  },
  {
    rank: 13,
    name: 'Introduction to Electrical Engineering (Electromagnetics & Network Analysis)',
    level: 'Level 4 (First Year)',
    grade: 87,
    gradeLabel: '87% (Distinction, A+)',
    specialismBadge: 'Electromagnetics & Network Analysis',
    award: 'Contributed to IET Sussex Prize',
    summary: 'Mastered foundational electrical physics and network analysis: Kirchhoff’s voltage and current laws, Thévenin and Norton equivalent circuit reductions, capacitive and inductive reactance, magnetic circuits, and AC sinusoidal phasor analysis.',
    tech: ['Circuit Network Theorems', 'Thévenin/Norton Analysis', 'AC Phasor Analysis', 'Reactive Impedance', 'Magnetic Circuits']
  },
  {
    rank: 14,
    name: 'Electrical Engineering 2 (Three-Phase Power & Industrial Machines)',
    level: 'Level 5 (Second Year)',
    grade: 76,
    gradeLabel: '76% (Distinction, A)',
    specialismBadge: 'Three-Phase Power & Electrical Machines',
    summary: 'Analysed heavy industrial AC electrical power systems: 3-phase star and delta load calculations, transformer magnetic core saturation and hysteresis, induction motor slip-torque curves, and power factor correction while studying UK BS 7671 wiring standards.',
    tech: ['3-Phase Star/Delta Systems', 'Induction Motors', 'Power Transformers', 'Power Factor Correction', 'BS 7671 Wiring Regulations']
  },
  {
    rank: 15,
    name: 'Analogue & Digital Electronics 2 (Multistage Amplifiers & Sequential Logic)',
    level: 'Level 4 (First Year)',
    grade: 62,
    gradeLabel: '62% (Merit, B-)',
    specialismBadge: 'Multistage Amplifiers & Sequential Memory',
    summary: 'Designed and evaluated multistage BJT amplifier topologies, analysing frequency response cutoffs, differential input stages, and feedback stabilisation alongside sequential digital circuits including edge-triggered flip-flops, asynchronous ripple counters, and shift registers.',
    tech: ['Multistage BJT Amplifiers', 'Differential Pairs', 'Frequency Response Cutoffs', 'Sequential Logic', 'Flip-Flops & Counters']
  },
  {
    rank: 16,
    name: 'Engineering Mathematics (Differential Equations & Numerical Methods)',
    level: 'Level 4 (First Year)',
    grade: 84,
    gradeLabel: '84% (Distinction, A+)',
    specialismBadge: 'Differential Equations & Numerical Solvers',
    summary: 'The mathematical foundation of all engineering disciplines: solving 2nd-order ordinary differential equations for RLC circuits, Laplace transforms, Fourier series expansions, matrix eigenvalues, and developing numerical solver algorithms in MATLAB.',
    tech: ['2nd-Order Differential Equations', 'Laplace Transforms', 'Fourier Series', 'Linear Algebra & Matrices', 'MATLAB Numerical Solvers']
  },
  {
    rank: 17,
    name: 'Product Design (Systems Engineering & Commercial Feasibility)',
    level: 'Level 6 (Final Year)',
    grade: 62,
    gradeLabel: '62% (Merit, B-)',
    specialismBadge: 'Product Engineering & Systems Feasibility',
    summary: 'Worked as consulting systems engineer in an interdisciplinary cohort developing a commercial grid energy storage concept. Applied New Product Development (NPD) stage-gate methodologies, SWOT analysis, techno-economic feasibility studies, and executive pitch decks.',
    tech: ['New Product Development (NPD)', 'Stage-Gate Pitching', 'Techno-Economic Feasibility', 'Gantt Planning', 'Commercial Viability']
  }
];

export const awards = [
  { title: 'IET Prize', org: 'The Institution of Engineering and Technology', year: '2026' },
  { title: 'IET Sussex Prize', org: 'The Institution of Engineering and Technology', year: '2023' },
];

export const skills: Record<string, string[]> = {
  'FPGA & RTL': ['Verilog', 'VHDL', 'RTL development', 'FSMs', 'ALU design', 'Vivado', 'Quartus II', 'ModelSim'],
  'Software & Scripting': ['Python', 'Embedded C', 'C++', 'MATLAB', 'DXL (DOORS)', 'JavaScript / TypeScript', 'HTML/CSS', 'Gemini API'],
  'Hardware & IV&V': ['HIL verification', 'Electro-Optical Directors', 'Signal injection', 'Oscilloscopes', 'Logic analysers', 'JTAG', 'UART', 'I2C'],
  'Systems Engineering': ['Requirements management', 'IBM DOORS', 'Enterprise Architect', 'Simulink', 'Git', 'CI/CD'],
};

export const leadership = [
  { role: 'Co-President, VP & Financial Secretary', org: 'Brighton Real Ale Society', period: 'Oct 2025 – Present' },
  { role: 'VP Finance', org: 'University Engineering Society', period: 'Sept 2023 – June 2024' },
  { role: 'STEM Ambassador', org: 'BAE Systems', period: '2024 – 2025' },
];

export const interests = ['Custom PC building', 'FPV drone flying', '3D printing', 'Bouldering'];
