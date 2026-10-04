import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Dimensions for 85mm x 55mm card at 300 DPI with 3mm bleed (91mm x 61mm)
# 91mm = 1075 px, 61mm = 720 px
WIDTH = 1075
HEIGHT = 720
BLEED = 35 # 3mm bleed in pixels
SAFE_MARGIN = 70 # Safe inner margin

# Load Fonts
def get_font(name, size):
    font_paths = [
        f"C:/Windows/Fonts/{name}.ttf",
        f"C:/Windows/Fonts/{name}.otf",
        "C:/Windows/Fonts/bahnschrift.ttf",
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

font_title = get_font("bahnschrift", 52)
font_title_bold = get_font("arialbd", 54)
font_postnom = get_font("bahnschrift", 24)
font_role = get_font("bahnschrift", 30)
font_badge = get_font("bahnschrift", 21)
font_body = get_font("bahnschrift", 24)
font_mono = get_font("consola", 20)
font_sub = get_font("bahnschrift", 20)
font_micro = get_font("bahnschrift", 17)

# Colors from site design tokens
COLOR_BG = (9, 14, 21)          # #090e15
COLOR_SURFACE = (15, 22, 34)    # #0f1622
COLOR_SURFACE_2 = (21, 32, 46)  # #15202e
COLOR_BRAND = (56, 189, 248)    # #38bdf8 (electric cyan)
COLOR_BRAND_STRONG = (2, 132, 199) # #0284c7
COLOR_ACCENT = (45, 212, 191)   # #2dd4bf (teal)
COLOR_TEXT = (240, 246, 252)    # #f0f6fc
COLOR_MUTED = (139, 155, 176)   # #8b9bb0
COLOR_GOLD = (223, 177, 91)     # gold foil accent
COLOR_BORDER = (30, 44, 61)     # #1e2c3d

# Load site monogram logo
logo_raw = Image.open('public/favicon-dark.png').convert('RGBA')

# -------------------------------------------------------------
# 1. GENERATE FRONT CARD
# -------------------------------------------------------------
front = Image.new('RGBA', (WIDTH, HEIGHT), COLOR_BG)
draw_f = ImageDraw.Draw(front)

# Draw subtle PCB circuit trace lines
def draw_circuit_traces(draw, w, h):
    trace_color = (25, 38, 55, 160)
    dot_color = (56, 189, 248, 120)
    
    # Left traces
    traces = [
        ([(0, 180), (120, 180), (160, 220), (280, 220)], (280, 220)),
        ([(0, 230), (80, 230), (140, 290), (320, 290)], (320, 290)),
        ([(0, 480), (140, 480), (190, 430), (260, 430)], (260, 430)),
        ([(0, 540), (110, 540), (160, 490), (340, 490)], (340, 490)),
        # Right traces
        ([(w, 160), (w - 140, 160), (w - 200, 220), (w - 300, 220)], (w - 300, 220)),
        ([(w, 210), (w - 100, 210), (w - 170, 280), (w - 240, 280)], (w - 240, 280)),
        ([(w, 500), (w - 120, 500), (w - 180, 440), (w - 280, 440)], (w - 280, 440)),
        ([(w, 560), (w - 80, 560), (w - 150, 490), (w - 320, 490)], (w - 320, 490)),
    ]
    for path, dot in traces:
        draw.line(path, fill=trace_color, width=3)
        draw.ellipse([dot[0] - 5, dot[1] - 5, dot[0] + 5, dot[1] + 5], fill=dot_color)

draw_circuit_traces(draw_f, WIDTH, HEIGHT)

# Draw Top Header: Monogram badge + IET accreditation
logo_size = 110
logo_resized = logo_raw.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

# Badge container
badge_x = SAFE_MARGIN + 10
badge_y = SAFE_MARGIN + 10
draw_f.rounded_rectangle(
    [badge_x - 10, badge_y - 10, badge_x + logo_size + 10, badge_y + logo_size + 10],
    radius=20,
    fill=(15, 22, 34, 230),
    outline=COLOR_BORDER,
    width=2
)
front.paste(logo_resized, (badge_x, badge_y), logo_resized)

# Top Right: IET Prize Winner Pill
iet_text = "★ THE IET PRIZE 2026 WINNER"
iet_bbox = draw_f.textbbox((0, 0), iet_text, font=font_badge)
iet_w = iet_bbox[2] - iet_bbox[0]
iet_x = WIDTH - SAFE_MARGIN - iet_w - 40
iet_y = SAFE_MARGIN + 20

draw_f.rounded_rectangle(
    [iet_x - 18, iet_y - 10, iet_x + iet_w + 18, iet_y + 36],
    radius=12,
    fill=(30, 25, 15, 240),
    outline=(180, 140, 60, 220),
    width=2
)
draw_f.text((iet_x, iet_y), iet_text, font=font_badge, fill=COLOR_GOLD)

# Top Right Sub: First Class Degree
first_class = "FIRST CLASS HONOURS (80%)"
fc_bbox = draw_f.textbbox((0, 0), first_class, font=font_micro)
fc_w = fc_bbox[2] - fc_bbox[0]
draw_f.text((WIDTH - SAFE_MARGIN - fc_w - 20, iet_y + 50), first_class, font=font_micro, fill=COLOR_MUTED)

# Middle Section: Name & Role
name_y = 265
draw_f.text((SAFE_MARGIN + 15, name_y), "Harry Rogers", font=font_title_bold, fill=COLOR_TEXT)

# Postnominals
draw_f.text((SAFE_MARGIN + 365, name_y + 18), "BEng (Hons) MIET", font=font_postnom, fill=COLOR_BRAND)

# Title & Division
role_y = name_y + 70
draw_f.text((SAFE_MARGIN + 15, role_y), "Hardware Test Engineer", font=font_role, fill=COLOR_ACCENT)

# Specialisation Tagline
spec_y = role_y + 48
spec_text = "FPGA & Digital Logic Verification  •  Automated HIL Testbenches"
draw_f.text((SAFE_MARGIN + 15, spec_y), spec_text, font=font_body, fill=COLOR_MUTED)

# Divider line with gradient accent
div_y = 485
draw_f.line([(SAFE_MARGIN + 15, div_y), (WIDTH - SAFE_MARGIN - 15, div_y)], fill=COLOR_BORDER, width=2)
draw_f.line([(SAFE_MARGIN + 15, div_y), (SAFE_MARGIN + 240, div_y)], fill=COLOR_BRAND, width=3)

# Bottom Row: Verified Competency Modules & Domain
bottom_y = div_y + 32
draw_f.text((SAFE_MARGIN + 15, bottom_y), "AMD Xilinx Artix-7  •  Verilog / VHDL  •  Python ATE  •  UART / SPI / CAN", font=font_sub, fill=COLOR_TEXT)
draw_f.text((SAFE_MARGIN + 15, bottom_y + 38), "BEng Electronic & Computer Engineering  •  University of Brighton", font=font_micro, fill=COLOR_MUTED)

# Bottom Right Domain
domain_text = "harry-rogers.com"
dom_bbox = draw_f.textbbox((0, 0), domain_text, font=font_role)
dom_w = dom_bbox[2] - dom_bbox[0]
draw_f.text((WIDTH - SAFE_MARGIN - dom_w - 15, bottom_y + 10), domain_text, font=font_role, fill=COLOR_BRAND)

front_rgb = front.convert('RGB')
front_rgb.save('public/print/business-card-front.png', dpi=(300, 300), quality=98)
print("Front card PNG generated: public/print/business-card-front.png")


# -------------------------------------------------------------
# 2. GENERATE BACK CARD (With Scannable QR Code & Contact Data)
# -------------------------------------------------------------
back = Image.new('RGBA', (WIDTH, HEIGHT), (11, 16, 25))
draw_b = ImageDraw.Draw(back)

draw_circuit_traces(draw_b, WIDTH, HEIGHT)

# Back Top Bar
draw_b.line([(SAFE_MARGIN + 15, SAFE_MARGIN + 45), (WIDTH - SAFE_MARGIN - 15, SAFE_MARGIN + 45)], fill=COLOR_BORDER, width=2)
draw_b.text((SAFE_MARGIN + 15, SAFE_MARGIN + 10), "DIRECT ENGINEERING CONTACT & CREDENTIALS", font=font_badge, fill=COLOR_BRAND)

status_badge = "AVAILABLE FOR CONTRACT / HIRE"
st_bbox = draw_b.textbbox((0, 0), status_badge, font=font_micro)
st_w = st_bbox[2] - st_bbox[0]
draw_b.text((WIDTH - SAFE_MARGIN - st_w - 15, SAFE_MARGIN + 14), status_badge, font=font_micro, fill=COLOR_ACCENT)

# Generate genuine scannable QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=8,
    border=2,
)
qr.add_data('https://www.harry-rogers.com')
qr.make(fit=True)
qr_img = qr.make_image(fill_color="#090e15", back_color="#ffffff").convert('RGBA')

# QR Placement on Right
qr_size = 280
qr_resized = qr_img.resize((qr_size, qr_size), Image.Resampling.NEAREST)

qr_x = WIDTH - SAFE_MARGIN - qr_size - 25
qr_y = 175

# White plate backing with soft rounded edge for high contrast
draw_b.rounded_rectangle(
    [qr_x - 14, qr_y - 14, qr_x + qr_size + 14, qr_y + qr_size + 14],
    radius=18,
    fill=(255, 255, 255),
    outline=COLOR_BRAND,
    width=3
)
back.paste(qr_resized, (qr_x, qr_y), qr_resized)

# QR Label
qr_label = "SCAN FOR FULL PORTFOLIO & REPOS"
qr_lbl_bbox = draw_b.textbbox((0, 0), qr_label, font=font_micro)
qr_lbl_w = qr_lbl_bbox[2] - qr_lbl_bbox[0]
draw_b.text((qr_x + (qr_size - qr_lbl_w) // 2, qr_y + qr_size + 24), qr_label, font=font_micro, fill=COLOR_BRAND)

# Left Column: Contact Items
contact_items = [
    ("PORTFOLIO", "https://www.harry-rogers.com", COLOR_BRAND),
    ("EMAIL", "harryrogers073@gmail.com", COLOR_TEXT),
    ("LINKEDIN", "linkedin.com/in/harryrogers073", COLOR_MUTED),
    ("GITHUB", "github.com/HarryRogers073", COLOR_MUTED),
    ("LOCATION", "Sussex & London, United Kingdom", COLOR_MUTED),
]

cy = 160
for label, val, color in contact_items:
    draw_b.text((SAFE_MARGIN + 20, cy), label, font=font_micro, fill=COLOR_ACCENT)
    draw_b.text((SAFE_MARGIN + 20, cy + 24), val, font=font_body, fill=color)
    cy += 74

# Bottom Footer
b_foot_y = HEIGHT - SAFE_MARGIN - 35
draw_b.line([(SAFE_MARGIN + 15, b_foot_y - 15), (WIDTH - SAFE_MARGIN - 15, b_foot_y - 15)], fill=COLOR_BORDER, width=2)
draw_b.text((SAFE_MARGIN + 20, b_foot_y), "Verified BEng (Hons) Graduate  •  IET Prize Recipient  •  Hardware Test Specialist", font=font_micro, fill=COLOR_MUTED)
draw_b.text((WIDTH - SAFE_MARGIN - 165, b_foot_y), "harry-rogers.com", font=font_micro, fill=COLOR_BRAND)

back_rgb = back.convert('RGB')
back_rgb.save('public/print/business-card-back.png', dpi=(300, 300), quality=98)
print("Back card PNG generated: public/print/business-card-back.png")
