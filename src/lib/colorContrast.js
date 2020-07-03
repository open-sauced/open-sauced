export default function textColor(color, dark = "black", light = "white") {
  const treshold = 16000000;
  return Number("0x" + color) > treshold ? dark : light;
}
