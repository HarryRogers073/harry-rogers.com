# Harry Rogers - Personal Engineering Portfolio

The official portfolio website for **Harry Rogers**, Hardware Test Engineer based in Sussex, UK.

Showcases professional defence robotics test engineering at Chess Dynamics, industrial avionics experience at BAE Systems, and capstone academic projects in FPGA digital systems, Hardware-in-the-Loop (HIL) verification, embedded firmware, and autonomous robotics.

- **Production URL:** [www.harry-rogers.com](https://www.harry-rogers.com)
- **LinkedIn:** [linkedin.com/in/harryrogers073](https://www.linkedin.com/in/harryrogers073/)
- **GitHub:** [github.com/HarryRogers073](https://github.com/HarryRogers073)

---

## Technical Stack

- **Framework:** [Astro 5](https://astro.build) (Static Site Generation)
- **Language:** TypeScript, HTML5, Modern CSS (Glassmorphism & Custom Properties)
- **Content:** MDX Content Collections for detailed technical case studies
- **Deployment:** Cloudflare Pages / Vercel with automated CI/CD pipeline
- **Optimisation:** Zero external client frameworks; lightweight custom canvas for background flow animations

---

## Local Development

### Prerequisites
- Node.js (v18.17.0 or higher)
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/HarryRogers073/harry-rogers.com.git
cd harry-rogers.com

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build & Verification
```bash
# Verify referenced images and build static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
harry-rogers.com/
├── public/                 # Static assets, schematics, and project figures
├── scripts/                # Build pre-check scripts (e.g. image verification)
├── src/
│   ├── components/         # Reusable UI elements (Nav, Footer, Cards)
│   ├── content/
│   │   └── projects/       # MDX engineering case studies
│   ├── data/
│   │   └── profile.ts      # Core profile, CV data, and module records
│   ├── layouts/            # BaseLayout with SEO, meta, and lightbox
│   ├── pages/              # Astro routes (index, about, experience, cv, contact)
│   └── styles/             # Global CSS design tokens and animations
└── astro.config.mjs        # Astro configuration
```

---

## License

Personal content and project case studies © Harry Rogers. Source code licensed under the [MIT License](LICENSE).
