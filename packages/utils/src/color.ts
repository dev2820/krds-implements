type Color = `#${string}`;

function rgbToNumber(rgb: string) {
  return Number('0x' + rgb);
}

function rgbToLinear(rgb: Color) {
  const r = rgb.slice(1, 3);
  const g = rgb.slice(3, 5);
  const b = rgb.slice(5, 7);

  const toLinear = (c: number) => {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  return {
    r: toLinear(rgbToNumber(r)),
    g: toLinear(rgbToNumber(g)),
    b: toLinear(rgbToNumber(b)),
  };
}

function relativeLuminance(rgb: Color) {
  const linearRGB = rgbToLinear(rgb);
  return 0.2126 * linearRGB.r + 0.7152 * linearRGB.g + 0.0722 * linearRGB.b;
}

function contrastRatio(color1: Color, color2: Color) {
  const L1 = relativeLuminance(color1);
  const L2 = relativeLuminance(color2);
  return L1 > L2 ? (L1 + 0.05) / (L2 + 0.05) : (L2 + 0.05) / (L1 + 0.05);
}

export function isHighContrast(color1: Color, color2: Color, ratio = 3) {
  return contrastRatio(color1, color2) >= ratio;
}
