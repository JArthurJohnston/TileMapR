import React from 'react'
import { SettingsContext } from '../data'
import Draw from '../drawing'
import CanvasEngine from './canvas/engine/CanvasEngine'
import { DialogContext } from './modal/DialogProvider'
import { Button } from './primitives'
import NumberInput from './primitives/inputs/NumberInput'

const styles = {
  container: {
    backgroundColor: 'white'
  },
  previewContainer: {
    backgroundColor: 'lightgrey',
    padding: '2em',
    marginBottom: '1em'
  },
  buttonsContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    padding: '1em',
    minWidth: '21em'
  },
  numberInput: {
    width: '7em'
  }
}

export default function ResizeDialog() {
  const { closeDialog } = React.useContext(DialogContext)
  const previewRef = React.useRef()
  const { backgroundColor } = React.useContext(SettingsContext)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const pixelSize = 1
    const pixels = CanvasEngine.pixels
    const width = pixels.length
    const height = pixels[0].length
    setWidth(width)
    setHeight(height)
    const scaledWidth = width * pixelSize
    const scaledHeight = height * pixelSize
    previewRef.current.width = scaledWidth
    previewRef.current.height = scaledHeight
    previewRef.current.style = { scaledWidth, scaledHeight }
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
  }, [])

  React.useEffect(() => {
    const pixels = CanvasEngine.pixels
    const newPixels = Array(width).fill().map(() => Array(height));

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        newPixels[x][y] = pixels[x][y]
      }
    }

    //set new pixels to canvas and repaint
  }, [width, height])

  return (
    <div style={styles.container} className='nes-container with-title is-centered is-rounded'>
      <label className='title'>Save</label>
      <div style={styles.previewContainer}>
        <canvas ref={previewRef} />
      </div>
      <div>
        <NumberInput label='Width:' style={styles.numberInput} onChange={setWidth} value={width} />
        <NumberInput label='Height:' style={styles.numberInput} onChange={setHeight} value={height} />
      </div>
      <div>
        <div style={styles.buttonsContainer}>
          <Button label='OK' />
          <Button label='Cancel' onClick={closeDialog} />
        </div>
      </div>
    </div>
  )
}
