/**
 * =============================================================================
 * File:         linkedin.ts
 * Written by:   Harry Rogers
 * Date:         October 2026
 * Description:  Verified LinkedIn career milestones and professional update dataset
 * =============================================================================
 */

export interface LinkedInPost {
  id: string;
  date: string;
  formattedDate: string;
  category: 'Award' | 'Career Milestone' | 'Engineering';
  title: string;
  content: string;
  tags: string[];
  postUrl: string;
  actionLabel: string;
  isExternal?: boolean;
  stats?: {
    reactions: number;
    comments: number;
  };
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: 'iet-prize-2026',
    date: '2026-07-15',
    formattedDate: 'July 2026',
    category: 'Award',
    title: 'Awarded The IET Prize 2026 & First-Class Honours',
    content:
      'Delighted to share that I have graduated with First-Class Honours in BEng Electronic & Computer Engineering from the University of Brighton (80% overall), and have been awarded The IET Prize 2026! My final-year dissertation on the VAIDAR Hardware-in-the-Loop verification framework achieved 91% (A*). Huge thanks to my academic supervisors and engineering peers for an unforgettable four years.',
    tags: ['IETPrize', 'FirstClassHonours', 'FPGA', 'EngineeringExcellence'],
    postUrl: 'https://drive.google.com/file/d/19GDAzXFtHfdsel3uywczHKlfzlRzslaX/view',
    actionLabel: 'View Certificate ↗',
    isExternal: true,
    stats: {
      reactions: 142,
      comments: 28,
    },
  },
  {
    id: 'chess-dynamics-role',
    date: '2026-06-20',
    formattedDate: 'June 2026',
    category: 'Career Milestone',
    title: 'Joining Chess Dynamics as Hardware Test Engineer',
    content:
      'Excited to announce that I have joined Chess Dynamics as a Hardware Test Engineer! In this role, I am acting as the primary Test Team Point of Contact for the Land Integrated Portfolio Team (IPT), driving system integration, factory acceptance testing (FAT), and fault diagnostics on precision electro-optical surveillance directors.',
    tags: ['DefenceTech', 'HardwareTesting', 'ElectroOptics', 'SystemsEngineering'],
    postUrl: '/experience#chess-dynamics',
    actionLabel: 'View Role Overview →',
    isExternal: false,
    stats: {
      reactions: 98,
      comments: 19,
    },
  },
  {
    id: 'bae-systems-placement',
    date: '2025-06-12',
    formattedDate: 'June 2025',
    category: 'Career Milestone',
    title: 'Completing my 12-Month Placement at BAE Systems',
    content:
      'Reflecting on a fantastic year completing my industrial placement at BAE Systems (Electronic Systems) in Rochester. From authoring Python regression suites across IV&V cycles to delivering STEM in a Box workshops to over 400 school pupils, this experience has cemented my dedication to high-reliability engineering.',
    tags: ['BAESystems', 'IndustrialPlacement', 'IVandV', 'STEMAmbassador'],
    postUrl: '/experience#bae-systems',
    actionLabel: 'View Placement Overview →',
    isExternal: false,
    stats: {
      reactions: 115,
      comments: 22,
    },
  },
];
