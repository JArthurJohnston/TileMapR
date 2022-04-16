import FillTool from "../components/canvas/painting/FillTool"

describe('FillTool', () => {
  let engine, tool
  const pixels = Array(5).fill().map(() => Array(5))
  beforeEach(() => {
    engine = {
      resolution: {
        width: 5,
        height: 5
      },
      pixels,
      getPixel: (x, y) => pixels[x][y],
      paintPixel: (x, y, color) => pixels[x][y] = color
    }

    tool = new FillTool(engine)
  })

  describe('fill', () => {
    it('should fill the whole image', () => {
      tool.fill(0,0, '#FFF')
    
      engine.pixels.forEach(row => {
        row.forEach(pixel => {
          expect(pixel).toBe('#FFF')
        });
      });
    })
  })

  describe('outOfBounds', () => {


    describe.each([
      [-1, -1],
      [0, -1],
      [-1, 0],
      [5, 5],
      [4, 5],
      [5, 4],
    ])('Given %i, %i', (x, y) => {
      it('should be true', () => {
        expect(tool.outOfBounds(x, y)).toBe(true)
      })
    })

    describe('when in bounds', () => {
      describe.each([
        [0, 0],
        [4, 4],
      ])('Given %i, %i', (x, y) => {
        it('should return false', () => {
          expect(tool.outOfBounds(x, y)).toBe(false)
        })
      })
    })
  })
})