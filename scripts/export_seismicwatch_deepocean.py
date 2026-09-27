"""Export SeismicWatch's Android Deep Ocean vector drawable as a web-ready PNG."""

from pathlib import Path

from PIL import Image, ImageDraw


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "Portfolio" / "OfficialThumbnails" / "seismicwatch-deep-ocean.png"
SIZE = 1024
SUPERSAMPLE = 4
SCALE = SIZE * SUPERSAMPLE / 108


def point(x: float, y: float) -> tuple[int, int]:
    return round(x * SCALE), round(y * SCALE)


canvas_size = SIZE * SUPERSAMPLE
image = Image.new("RGBA", (canvas_size, canvas_size), "#0A1019")

# The Android path is a 58x66 rounded shell with a 21-unit corner radius.
mask = Image.new("L", image.size, 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle((*point(25, 21), *point(83, 87)), radius=round(21 * SCALE), fill=255)

# Reproduce the drawable's diagonal #2E9BE6 -> #22C7D6 gradient.
gradient = Image.new("RGBA", image.size)
gradient_pixels = gradient.load()
start = (46, 155, 230)
end = (34, 199, 214)
start_x, start_y = point(25, 21)
end_x, end_y = point(83, 87)
axis_x, axis_y = end_x - start_x, end_y - start_y
axis_length_squared = axis_x * axis_x + axis_y * axis_y

for y in range(start_y, end_y + 1):
    for x in range(start_x, end_x + 1):
        t = ((x - start_x) * axis_x + (y - start_y) * axis_y) / axis_length_squared
        t = max(0.0, min(1.0, t))
        gradient_pixels[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(start, end)) + (255,)

image.alpha_composite(Image.composite(gradient, Image.new("RGBA", image.size), mask))

# White seismic waveform from the source vector drawable.
draw = ImageDraw.Draw(image)
waveform = [point(x, y) for x, y in [(34, 54), (43, 54), (48, 40), (55, 70), (60, 46), (66, 60), (70, 54), (74, 54)]]
line_width = round(5 * SCALE)
draw.line(waveform, fill="#FFF7F2F4", width=line_width, joint="curve")
radius = line_width // 2
for x, y in (waveform[0], waveform[-1]):
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill="#FFF7F2F4")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
image.resize((SIZE, SIZE), Image.Resampling.LANCZOS).save(OUTPUT, optimize=True)
print(OUTPUT)
