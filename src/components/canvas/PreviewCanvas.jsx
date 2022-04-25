import React from 'react'
import { SettingsContext } from '../../data'
import CanvasEngine from './engine/CanvasEngine'

const styles = {
  container: {
    backgroundColor: 'lightgrey',
    padding: '2em',
    marginBottom: '1em'
  },
}

export default function PreviewCanvas({pixelSize}) {
  const previewRef = React.useRef()
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const { backgroundColor } = React.useContext(SettingsContext)

  const renderIt = (pixels, width, height, pixelSize, backgroundColor) => {
    const previewContext = previewRef.current.getContext('2d')
    previewContext.imageSmoothingEnabled = false

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (pixels[x][y]) {
          Draw.Rectangle()
            .starting(x * pixelSize, y * pixelSize)
            .size(pixelSize, pixelSize)
            .color(pixels[x][y])
            .on(previewContext)
        } else if (backgroundColor) {
          Draw.Rectangle()
            .starting(x * pixelSize, y * pixelSize)
            .size(pixelSize, pixelSize)
            .color(backgroundColor)
            .on(previewContext)
        }
      }
    }
  }

  React.useEffect(() => {
    const pixels = CanvasEngine.pixels
    const imageWidth = pixels.length
    const imageHeight = pixels[0].length
    setWidth(imageWidth)
    setHeight(imageHeight)

    const scaledWidth = width * pixelSize
    const scaledHeight = height * pixelSize
    previewRef.current.width = scaledWidth
    previewRef.current.height = scaledHeight
    previewRef.current.style = { scaledWidth, scaledHeight }

    renderIt(pixels, width, height, pixelSize, backgroundColor)
  }, [])

  return (
    <div style={styles.container}>
      <canvas ref={previewRef} />
    </div>
  )
}

PreviewCanvas.defaultProps = {
  pixelSize: 1
}