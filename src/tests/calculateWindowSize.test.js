import calculateWindowSize from "../components/canvas/calculateWindowSize"

describe('calculate window size', () => {
    it('should return the smallest dimension', () => {
      let { width, height } = calculateWindowSize(20, 20, 640, 480)
    
      expect(width).toBe(480)
      expect(height).toBe(480)
    })

    it('should subract the padding', () => {
      let { width, height } = calculateWindowSize(20, 20, 660, 500, 5)
      
      expect(width).toBe(480)
      expect(height).toBe(480)
    })
    
    it('should use the correct aspect ratio', () => {
      let { width, height } = calculateWindowSize(10, 20, 100, 100)
      
      expect(width).toBe(50)
      expect(height).toBe(100)
    })
})
