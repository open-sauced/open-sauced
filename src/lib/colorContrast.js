export default function textColor(color, dark = "black", light = "white") {
  const treshold = 13000000;
  return Number("0x" + color) > treshold ? dark : light;
}
