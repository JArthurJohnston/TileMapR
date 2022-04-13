import CanvasEngine from "../engine/CanvasEngine"

function draw(x, y, color, size = 1) {
  CanvasEngine.drawPixel(x, y, color)
}

function fill(x, y, color) {
  const startingColor = CanvasEngine.getPixel(x, y)
  fillAll(x, y, color, startingColor)
}

function erase(x, y) {
  CanvasEngine.clearPixel(x, y)
}

function outOfBounds(x, y) {
  const res = CanvasEngine.resolution
  return x >= res.x || x < 0 || y >= res.y || y < 0
}

function fillAll(x, y, color, startingColor) {
  console.log('filling', x, y);
  if (outOfBounds(x, y) || CanvasEngine.getPixel(x, y !== startingColor)) {
    return
  } else {
    CanvasEngine.paintPixel(x, y, color)
    fillAll(x++, y, color, startingColor)
    fillAll(x--, y, color, startingColor)
    fillAll(x, y++, color, startingColor)
    fillAll(x, y--, color, startingColor)
  }
}

export const PEN = { label: 'Pen', action: draw }
export const FILL = { label: 'Fill', action: fill }
export const ERASER = { label: 'Eraser', action: erase }
export const getTool = (toolName) => {
  return [PEN, FILL, ERASER].find(e => e.label === toolName)
}
