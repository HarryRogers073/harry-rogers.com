import base64
import qrcode
import io

with open('public/favicon-dark.png', 'rb') as f:
    b64_logo = base64.b64encode(f.read()).decode('utf-8')

# QR code to SVG / PNG data URI
qr = qrcode.QRCode(version=1, box_size=10, border=1)
qr.add_data('https://www.harry-rogers.com')
qr.make(fit=True)
qr_img = qr.make_image(fill_color="#090e15", back_color="#ffffff")
buf = io.BytesIO()
qr_img.save(buf, format='PNG')
b64_qr = base64.b64encode(buf.getvalue()).decode('utf-8')

# Front SVG (91mm x 61mm with 3mm bleed; viewBox 0 0 1075 720)
svg_front = f'''<svg xmlns="http://www.w3.org/2000/svg" width="91mm" height="61mm" viewBox="0 0 1075 720" style="background:#090e15; font-family:'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1724"/>
      <stop offset="60%" stop-color="#090e15"/>
      <stop offset="100%" stop-color="#04070a"/>
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#2dd4bf"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#dfb15b"/>
      <stop offset="100%" stop-color="#a16207"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1075" height="720" fill="url(#bgGrad)"/>

  <!-- Circuit Traces Vector Overlay -->
  <g stroke="#1e2c3d" stroke-width="2.5" fill="none" opacity="0.6">
    <path d="M 0 180 L 120 180 L 160 220 L 280 220" />
    <circle cx="280" cy="220" r="4.5" fill="#38bdf8" />
    <path d="M 0 230 L 80 230 L 140 290 L 320 290" />
    <circle cx="320" cy="290" r="4.5" fill="#38bdf8" />
    <path d="M 0 480 L 140 480 L 190 430 L 260 430" />
    <circle cx="260" cy="430" r="4.5" fill="#38bdf8" />
    <path d="M 0 540 L 110 540 L 160 490 L 340 490" />
    <circle cx="340" cy="490" r="4.5" fill="#38bdf8" />
    <path d="M 1075 160 L 935 160 L 875 220 L 775 220" />
    <circle cx="775" cy="220" r="4.5" fill="#2dd4bf" />
    <path d="M 1075 210 L 975 210 L 905 280 L 835 280" />
    <circle cx="835" cy="280" r="4.5" fill="#2dd4bf" />
    <path d="M 1075 500 L 955 500 L 895 440 L 795 440" />
    <circle cx="795" cy="440" r="4.5" fill="#2dd4bf" />
    <path d="M 1075 560 L 995 560 L 925 490 L 755 490" />
    <circle cx="755" cy="490" r="4.5" fill="#2dd4bf" />
  </g>

  <!-- Top Logo Monogram Badge -->
  <g transform="translate(80, 80)">
    <rect width="120" height="120" rx="24" fill="#0f1622" stroke="#1e2c3d" stroke-width="2"/>
    <image href="data:image/png;base64,{b64_logo}" x="10" y="10" width="100" height="100"/>
  </g>

  <!-- Top Right: IET Prize Award Pill -->
  <g transform="translate(680, 85)">
    <rect width="315" height="48" rx="12" fill="#221c10" stroke="#dfb15b" stroke-width="1.8"/>
    <text x="157" y="31" fill="url(#goldGrad)" font-size="19" font-weight="700" letter-spacing="1" text-anchor="middle">★ THE IET PRIZE 2026 WINNER</text>
    <text x="315" y="80" fill="#8b9bb0" font-size="18" font-weight="600" letter-spacing="0.5" text-anchor="end">FIRST CLASS HONOURS (80%)</text>
  </g>

  <!-- Name & Postnominals -->
  <text x="80" y="325" fill="#f0f6fc" font-size="58" font-weight="800" letter-spacing="-1">Harry Rogers</text>
  <text x="475" y="322" fill="#38bdf8" font-size="24" font-weight="600" font-family="'JetBrains Mono', monospace">BEng (Hons) MIET</text>

  <!-- Role Title -->
  <text x="80" y="380" fill="#2dd4bf" font-size="34" font-weight="700">Hardware Test Engineer</text>

  <!-- Specialisation Subtitle -->
  <text x="80" y="425" fill="#8b9bb0" font-size="24" font-weight="500">FPGA &amp; Digital Logic Verification  •  Automated HIL Testbenches</text>

  <!-- Divider Line -->
  <line x1="80" y1="490" x2="995" y2="490" stroke="#1e2c3d" stroke-width="2"/>
  <line x1="80" y1="490" x2="340" y2="490" stroke="url(#brandGrad)" stroke-width="3"/>

  <!-- Footer Info & Skills -->
  <text x="80" y="540" fill="#f0f6fc" font-size="21" font-weight="600">AMD Xilinx Artix-7  •  Verilog / VHDL  •  Python ATE  •  UART / SPI / CAN</text>
  <text x="80" y="585" fill="#8b9bb0" font-size="19" font-weight="500">BEng Electronic &amp; Computer Engineering  •  University of Brighton</text>

  <!-- Canonical Domain -->
  <text x="995" y="570" fill="#38bdf8" font-size="30" font-weight="700" text-anchor="end" font-family="'JetBrains Mono', monospace">harry-rogers.com</text>
</svg>'''

with open('public/print/business-card-front.svg', 'w', encoding='utf-8') as f:
    f.write(svg_front)
print("Front SVG written: public/print/business-card-front.svg")

# Back SVG
svg_back = f'''<svg xmlns="http://www.w3.org/2000/svg" width="91mm" height="61mm" viewBox="0 0 1075 720" style="background:#090e15; font-family:'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f1622"/>
      <stop offset="60%" stop-color="#0b1019"/>
      <stop offset="100%" stop-color="#05080c"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1075" height="720" fill="url(#bgGrad2)"/>

  <!-- Top Header Bar -->
  <line x1="80" y1="120" x2="995" y2="120" stroke="#1e2c3d" stroke-width="2"/>
  <text x="80" y="95" fill="#38bdf8" font-size="21" font-weight="700" letter-spacing="1.5">DIRECT ENGINEERING CONTACT &amp; CREDENTIALS</text>
  <text x="995" y="95" fill="#2dd4bf" font-size="18" font-weight="700" letter-spacing="1" text-anchor="end">AVAILABLE FOR CONTRACT / HIRE</text>

  <!-- Contact List Column -->
  <g transform="translate(80, 175)">
    <!-- Item 1: Portfolio -->
    <text x="0" y="0" fill="#2dd4bf" font-size="15" font-weight="700" letter-spacing="1">PORTFOLIO</text>
    <text x="0" y="28" fill="#38bdf8" font-size="24" font-weight="700" font-family="'JetBrains Mono', monospace">https://www.harry-rogers.com</text>

    <!-- Item 2: Email -->
    <text x="0" y="80" fill="#2dd4bf" font-size="15" font-weight="700" letter-spacing="1">DIRECT EMAIL</text>
    <text x="0" y="108" fill="#f0f6fc" font-size="24" font-weight="600" font-family="'JetBrains Mono', monospace">harryrogers073@gmail.com</text>

    <!-- Item 3: LinkedIn -->
    <text x="0" y="160" fill="#2dd4bf" font-size="15" font-weight="700" letter-spacing="1">LINKEDIN</text>
    <text x="0" y="188" fill="#8b9bb0" font-size="23" font-weight="500">linkedin.com/in/harryrogers073</text>

    <!-- Item 4: GitHub -->
    <text x="0" y="240" fill="#2dd4bf" font-size="15" font-weight="700" letter-spacing="1">GITHUB REPOSITORIES</text>
    <text x="0" y="268" fill="#8b9bb0" font-size="23" font-weight="500">github.com/HarryRogers073</text>

    <!-- Item 5: Location -->
    <text x="0" y="320" fill="#2dd4bf" font-size="15" font-weight="700" letter-spacing="1">LOCATION</text>
    <text x="0" y="348" fill="#8b9bb0" font-size="23" font-weight="500">Sussex &amp; London, United Kingdom</text>
  </g>

  <!-- QR Code Container on Right -->
  <g transform="translate(685, 175)">
    <rect width="310" height="310" rx="20" fill="#ffffff" stroke="#38bdf8" stroke-width="3"/>
    <image href="data:image/png;base64,{b64_qr}" x="15" y="15" width="280" height="280"/>
    <text x="155" y="345" fill="#38bdf8" font-size="16" font-weight="700" letter-spacing="1" text-anchor="middle">SCAN FOR PORTFOLIO &amp; REPOS</text>
  </g>

  <!-- Footer Line -->
  <line x1="80" y1="620" x2="995" y2="620" stroke="#1e2c3d" stroke-width="2"/>
  <text x="80" y="655" fill="#8b9bb0" font-size="18" font-weight="500">Verified BEng (Hons) Graduate  •  IET Prize Recipient  •  Hardware Test Specialist</text>
  <text x="995" y="655" fill="#38bdf8" font-size="18" font-weight="700" text-anchor="end">harry-rogers.com</text>
</svg>'''

with open('public/print/business-card-back.svg', 'w', encoding='utf-8') as f:
    f.write(svg_back)
print("Back SVG written: public/print/business-card-back.svg")
