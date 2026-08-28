from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent / "d365-it-helpdesk-cowork"
ROOT.mkdir(parents=True, exist_ok=True)

NAVY = (19, 44, 82, 255)
BLUE = (38, 103, 190, 255)
CYAN = (79, 196, 207, 255)
WHITE = (255, 255, 255, 255)
YELLOW = (248, 190, 54, 255)

# Full-color icon: shield + headset motif, with no text so it remains legible at 32 px.
size = 192
img = Image.new("RGBA", (size, size), (238, 247, 253, 255))
d = ImageDraw.Draw(img)
d.rounded_rectangle((8, 8, 184, 184), radius=40, fill=WHITE, outline=(190, 218, 239, 255), width=3)
d.rounded_rectangle((24, 24, 168, 168), radius=32, fill=NAVY)
d.polygon([(96, 43), (137, 58), (132, 106), (116, 136), (96, 150), (76, 136), (60, 106), (55, 58)], fill=BLUE)
d.arc((57, 52, 135, 126), start=205, end=335, fill=WHITE, width=9)
d.rounded_rectangle((48, 86, 66, 116), radius=8, fill=CYAN)
d.rounded_rectangle((126, 86, 144, 116), radius=8, fill=CYAN)
d.line((64, 116, 64, 130, 78, 139), fill=WHITE, width=7)
d.arc((73, 118, 119, 154), start=0, end=180, fill=YELLOW, width=7)
d.ellipse((91, 56, 101, 66), fill=YELLOW)
img.save(ROOT / "color.png")

# Outline icon: single-color white symbol on transparent background.
small = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
sd = ImageDraw.Draw(small)
sd.polygon([(16, 4), (25, 7), (24, 17), (20, 24), (16, 28), (12, 24), (8, 17), (7, 7)], outline=WHITE, width=2)
sd.arc((9, 8, 23, 22), start=205, end=335, fill=WHITE, width=2)
sd.rounded_rectangle((6, 14, 10, 20), radius=1, outline=WHITE, width=1)
sd.rounded_rectangle((22, 14, 26, 20), radius=1, outline=WHITE, width=1)
small.save(ROOT / "outline.png")
