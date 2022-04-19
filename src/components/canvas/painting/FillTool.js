import CanvasEngine from "../engine/CanvasEngine";

export default class FillTool {
  constructor(engine = CanvasEngine) {
    this.engine = engine
    this.label = 'Fill'
  }

  action(x, y, color) {
    // floodFill(this.engine.pixels, x, y, color)
    //engine.redraw
  }
}

export function floodFill(pixels, x, y, color) {
  const width = pixels.length
  const height = pixels[0].length
  const oldColor = pixels[x][y]

  const outOfBounds = (x, y) => x >= width || x < 0 || y >= height || y < 0;

  const fillLine = (pixels, x, y, color, dir='right') => {
    while(pixels[x][y] === oldColor) {
      if(outOfBounds(x, y)) {
        return
      } else {
        pixels[x][y] = color
      }
      dir === 'right' ? x++ : x--
    }
  }

  const fillRight = (pixels, x, y, color) => fillLine(x, y, color, 'right')
  const fillLeft = (pixels, x, y, color) => fillLine(x, y, color, 'left')

  const recursiveFill = (pixels, x, y, color) => {
    // setTimeout(() => {
    if (outOfBounds(x, y)) {
      return
    } else if (pixels[x][y] !== oldColor) {
      return
    } else {
      // console.log(pixels);

      fillRight(pixels, x, y, color)
      fillLeft(pixels, x, y, color)

      recursiveFill(pixels, x + 1, y, color)
      recursiveFill(pixels, x - 1, y, color)
      recursiveFill(pixels, x, y + 1, color)
      recursiveFill(pixels, x, y - 1, color)
    }
    // }, 1)
  }

  recursiveFill(pixels, x, y, color)
  CanvasEngine.paint()
}