class RectangleFactory {

  constructor(x=0, y=0, width=0, height=0, color='white') {
    this.x = x
    this.y = y
    this.fillColor = color
    this.width = width
    this.height = height
  }

  color(color) {
    this.fillColor = color
    return this
  }

  on(context) {
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height)
    context.fill();
  }

  starting(x, y) {
    this.x = x
    this.y = y
    return this
  }

  size(width, height) {
    this.width = width
    this.height = height
    return this;
  }

}

const Rectangle = () => new RectangleFactory()
export default Rectangle

/*
    drawRect(x, y, w, h, color){
        this.getContext().fillStyle = color;
        this.getContext().beginPath();
        this.getContext().rect(x, y, w, h)
        this.getContext().fill();
    }
*/