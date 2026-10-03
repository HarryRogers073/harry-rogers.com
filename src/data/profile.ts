/**
 * Single source of truth for personal/CV data used across the site.
 * Content migrated from the live Google Sites pages (Oct 2026).
 */

export const profile = {
  name: 'Harry Rogers',
  title: 'Test Engineer & FPGA Verification Specialist',
  tagline:
    'I test electro-optical defence systems by day and build hardware-in-the-loop verification tooling for FPGAs.',
  location: 'Brighton & Sussex, UK',
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
  'I’m a Test Engineer at Chess Dynamics, testing electro-optical surveillance systems and precision Electro-Optical Directors for land and maritime defence.',
  'I graduated from the University of Brighton with First-Class Honours in BEng Electronic & Computer Engineering (80% overall) and was awarded the IET Prize 2026.',
  'My passion is FPGA digital logic design and hardware verification. For my dissertation I built VAIDAR, a modular hardware-in-the-loop test framework that drives Python test vectors into a physical Xilinx Artix-7 FPGA and checks the silicon against golden models.',
  'Before that I spent a 12-month industrial placement at BAE Systems working in Integration, Verification & Validation (IV&V) and lab testbench setup.',
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
      'Primary Test Team Point of Contact for the Land Integrated Portfolio Team (IPT), advising Project Managers and Programme Directors on FAT scoping and test feasibility.',
      'Factory Acceptance Testing (FAT) on electro-optical director platforms (Hawkeye land series), spanning stabilized pan/tilt positioners, daylight HD optics, cooled MWIR / uncooled LWIR thermal imagers, and laser rangefinders.',
      'Board-level diagnostics and fault isolation across multi-layer PCBs, continuous slip-ring communications (RS-422, CAN bus, Gigabit Ethernet), and video processing pipelines.',
      'Environmental qualification including thermal chamber profiling (-40°C to +70°C) and vibration testing against military defence specifications.',
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
      ['Individual Project (VAIDAR)', 91],
      ['Communications', 90],
      ['Embedded Systems 3', 84],
      ['Digital Signal Processing', 68],
      ['Product Design', 62],
    ] },
    { level: 'Level 5 (2023/24)', items: [
      ['Digital Systems Design', 84],
      ['Engineering Design (Robot Wars, 2nd place)', 82],
      ['Embedded Systems 2', 79],
      ['Electrical Engineering 2', 76],
      ['Analogue Electronics & Comms', 70],
      ['Control & Applications', 70],
    ] },
  ] as { level: string; items: [string, number][] }[],
};

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
