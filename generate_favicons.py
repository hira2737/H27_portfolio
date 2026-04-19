from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

START_COLOR = (10, 25, 47)
END_COLOR = (17, 34, 64)
LETTER_COLOR = (34, 211, 238, 255)
GLOW_ALPHA = 150
OUTPUTS = [64, 32, 16]
ROOT = Path('.')

font_candidates = [
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/SegoeUIBold.ttf",
]
letter_font = None
for candidate in font_candidates:
    try:
        letter_font = ImageFont.truetype(candidate, 48)
        font_path = candidate
        break
    except Exception:
        continue

if letter_font is None:
    letter_font = ImageFont.load_default()
    font_path = None

images = {}

for size in OUTPUTS:
    img = Image.new('RGBA', (size, size))
    draw = ImageDraw.Draw(img)

    for y in range(size):
        ratio = y / (size - 1) if size > 1 else 0
        r = int(START_COLOR[0] + (END_COLOR[0] - START_COLOR[0]) * ratio)
        g = int(START_COLOR[1] + (END_COLOR[1] - START_COLOR[1]) * ratio)
        b = int(START_COLOR[2] + (END_COLOR[2] - START_COLOR[2]) * ratio)
        draw.line([(0, y), (size, y)], fill=(r, g, b))

    font_size = max(10, int(size * 0.7))
    if font_path:
        try:
            letter_font = ImageFont.truetype(font_path, font_size)
        except Exception:
            letter_font = ImageFont.load_default()
    else:
        letter_font = ImageFont.load_default()

    text = 'H'
    bbox = draw.textbbox((0, 0), text, font=letter_font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (size - text_width) / 2 - bbox[0]
    y = (size - text_height) / 2 - bbox[1]

    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.text((x, y), text, font=letter_font, fill=(LETTER_COLOR[0], LETTER_COLOR[1], LETTER_COLOR[2], GLOW_ALPHA))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=max(1, size * 0.08)))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)
    draw.text((x, y), text, font=letter_font, fill=LETTER_COLOR)

    output_path = ROOT / f'favicon-{size}.png'
    img.save(output_path)
    images[size] = img

images[64].save(ROOT / 'favicon.ico', format='ICO', sizes=[(s, s) for s in OUTPUTS])
images[64].save(ROOT / 'favicon.png')
