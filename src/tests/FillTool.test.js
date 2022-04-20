import FillTool, { floodFill, stackFill } from "../components/canvas/painting/FillTool"

function buildMockEngine(width, height) {
  const pixels = Array(width).fill().map(() => Array(height))
  return {
    resolution: {
      width,
      height
    },
    getPixel: (x, y) => pixels[x][y],
    paintPixel: (x, y, color) => pixels[x][y] = color,
    pixels,
  }
}

function expectPixelsAreFilled(pixels, expectedColor) {
  const width = pixels.length
  const height = pixels[0].length

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const pixel = pixels[x][y];
      expect(`${x} ${y} ${pixel}`).toBe(`${x} ${y} ${expectedColor}`)
    }
  }
}

describe('FillTool', () => {
  const expectedColor = '#FFF'

  describe('fill', () => {
    describe.each([
      5, 15, 15, 20, 30, 40, 50
    ])('With a %i x %i image', (size) => {
      it(`should fill a ${size} by ${size} image`, () => {
        const engine = buildMockEngine(size, size)
        const tool = new FillTool(engine)

        tool.fill(0, 0, expectedColor)

        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            const pixel = engine.pixels[x][y];
            expect(`${x} ${y} ${pixel}`).toBe(`${x} ${y} ${expectedColor}`)
          }
        }
      })
    })
  })

  describe('outOfBounds', () => {
    let tool, engine
    beforeEach(() => {
      engine = buildMockEngine(5, 5)
      tool = new FillTool(engine)
    })

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

  describe('floodFill', () => {
    const width = 20
    const height = 20
    const expectedColor = '#FFF'

    describe.each([10])('Size %i', (size) => {
      const pixels = Array(size).fill().map(() => Array(size))
      it(`should fill a ${size} X ${size} image`, () => {
        floodFill(pixels, 0, 0, expectedColor)

        expectPixelsAreFilled(pixels, expectedColor)
      })
    })
  })

  describe('stackFill', () => {

    it('should fill the array', () => {
      const pixels = Array(50).fill().map(() => Array(50))

      stackFill(0,0, expectedColor, pixels)
      
      expectPixelsAreFilled(pixels, expectedColor)
    })
  })
})