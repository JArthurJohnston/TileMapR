import CanvasEngine from "../engine/CanvasEngine";

export default class FillTool {
  constructor(engine = CanvasEngine) {
    this.engine = engine
    this.label = 'Fill'
  }

  action(x, y, color) {
    stackFill(x, y, color, this.engine.pixels)
    CanvasEngine.paint()
  }
}

export function floodFill(pixels, x, y, color) {
  const width = pixels.length
  const height = pixels[0].length
  const oldColor = pixels[x][y]

  const outOfBounds = (x, y) => x >= width || x < 0 || y >= height || y < 0;

  const fillLine = (pixels, x, y, color, dir = 'right') => {
    while (pixels[x][y] === oldColor) {
      if (outOfBounds(x, y)) {
        return
      } else {
        pixels[x][y] = color
      }
      dir === 'right' ? x++ : x--
    }
  }

  const recursiveFill = (pixels, x, y, color) => {
    if (outOfBounds(x, y)) {
      return
    } else if (pixels[x][y] !== oldColor) {
      return
    } else {

      pixels[x][y] = color
      recursiveFill(pixels, x + 1, y, color)
      recursiveFill(pixels, x - 1, y, color)
      recursiveFill(pixels, x, y + 1, color)
      recursiveFill(pixels, x, y - 1, color)
    }
  }

  recursiveFill(pixels, x, y, color)
}

export function stackFill(x, y, color, pixels) {
  const oldColor = pixels[x][y]
  if(oldColor === color) return
  const width = pixels.length
  const height = pixels[0].length
  const stack = [{ x, y }]
  const busyMap = Array(width).fill().map(() => Array(height))

  const inBounds = (x, y) => x < width && x >= 0 && y < height && y >= 0;

  const isFree = (x, y) => {
    return busyMap[x][y] !== true
  }

  const pushToStack = (x, y) => {
    if (inBounds(x, y) && pixels[x][y] === oldColor && isFree(x, y)) {
      stack.push({ x, y })
      busyMap[x][y] = true
    }
  }

  while(stack.length > 0) {
    const {x, y} = stack.pop()
    pixels[x][y] = color
    pushToStack(x + 1, y, pixels, oldColor)
    pushToStack(x - 1, y, pixels, oldColor)
    pushToStack(x, y + 1, pixels, oldColor)
    pushToStack(x, y - 1, pixels, oldColor)
  }
}
