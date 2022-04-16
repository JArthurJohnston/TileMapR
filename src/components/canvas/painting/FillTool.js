import CanvasEngine from "../engine/CanvasEngine";

export default class FillTool {
  constructor(engine=CanvasEngine){
    this.engine = engine
    this.id = 'Fill'
  }

  fill(x, y, color) {
    const startingColor = this.engine.getPixel(x, y)
    this.fillAll(x, y, color, startingColor)
  }

  outOfBounds(x, y) {
    const {width, height} = this.engine.resolution
    return x >= width || x < 0 || y >= height || y < 0
  }

  fillAll(x, y, color, startingColor) {
    if (this.outOfBounds(x, y) || this.engine.getPixel(x, y !== startingColor)) {
      return
    } else {
      this.engine.paintPixel(x, y, color)
      this.fillAll(++x, y, color, startingColor)
      this.fillAll(x--, y, color, startingColor)
      this.fillAll(x, ++y, color, startingColor)
      this.fillAll(x, y--, color, startingColor)
    }
  }
}