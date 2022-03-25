class LineFactory {
  constructor(context, xa=0, ya=0, xb=0, yb=0, strokeColor='black'){
    this.context = context
    this.xa = xa
    this.ya = ya
    this.xb = xb
    this.ya = yb
    this.strokeColor = strokeColor
  }

  on(context) {
    context.strokeStyle = this.strokeColo;
    context.beginPath();
    context.moveTo(this.xa, this.ya);
    context.lineTo(this.xb, this.yb);
    context.stroke(); 
  }

  starting(x, y) {
    this.xa = x
    this.ya = y
    return this
  }

  ending(x, y){
    this.xb = x
    this.yb = y
    return this
  }

  color(color) {
    this.strokeColor = color
    return this
  }
}
const Line = () => new LineFactory()
export default Line