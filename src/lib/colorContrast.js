export default function textColor(color, dark = "black", light = "white") {
  const threshold = 13000000;
  return Number("0x" + color) > threshold ? dark : light;
}
