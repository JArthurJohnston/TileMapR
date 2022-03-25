import { Line } from "./shapes"

export default class CanvasController {

  constructor(canvasRef, project) {
    this.context = canvasRef.current.getContext('2d')
    this.context.imageSmoothingEnabled = false
    this.project = project
    this.canvasWidth = canvasRef.current.offsetWidth
    this.canvasHeight = canvasRef.current.offsetHeight
    this.initCanvas();
  }

  drawGridColumns = () => {
    const { tileSize } = this.project;
    const gridWidth = Math.floor(this.canvasWidth / tileSize)

    for (let w = gridWidth; w < this.canvasWidth; w += gridWidth) {
      Line()
        .on(this.context)
        .starting(w, 0)
        .ending(w, this.canvasHeight)
        .draw()
    }
  }

  drawGridRows = () => {
    const { tileSize } = this.project;
    const gridHeight = Math.floor(this.canvasHeight / tileSize)

    for (let h = gridHeight; h < this.canvasHeight; h += gridHeight) {
      Line()
        .on(this.context)
        .starting(0, h)
        .ending(this.canvasWidth, h)
        .draw()
    }
  }

  initCanvas = () => {
    this.drawGridColumns()
    this.drawGridRows()
  }
}