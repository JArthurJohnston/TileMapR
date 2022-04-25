import React from 'react'
import { SettingsContext } from '../data'
import Draw from '../drawing'
import CanvasEngine from './canvas/engine/CanvasEngine'
import { DialogContext } from './modal/DialogProvider'
import { Checkbox } from './primitives'

const styles = {
  container: {
    backgroundColor: 'white'
  },
  previewContainer: {
    backgroundColor: 'lightgrey',
    padding: '2em',
  },
  buttonsContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    padding: '1em',
    minWidth: '21em'
  }
}

export default function SaveDialog() {
  const { closeDialog } = React.useContext(DialogContext)
  const previewRef = React.useRef()
  const [scale, setScale] = React.useState(1)
  const [imageSize, setImageSize] = React.useState({ w: 0, h: 0 })
  const [useBackground, setUseBackground] = React.useState(false)
  const { backgroundColor } = React.useContext(SettingsContext)
  const [downloadUrl, setDownloadUrl] = React.useState('')

  const downloadFile = () => {
    closeDialog()
    return true
  }

  React.useEffect(() => {
    const pixels = CanvasEngine.pixels
    const width = pixels.length
    const height = pixels[0].length
    const scaledWidth = width * scale
    const scaledHeight = height * scale
    setImageSize({ w: scaledWidth, h: scaledHeight })
    previewRef.current.width = scaledWidth
    previewRef.current.height = scaledHeight
    previewRef.current.style = { scaledWidth, scaledHeight }
    const previewContext = previewRef.current.getContext('2d')
    previewContext.imageSmoothingEnabled = false

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (pixels[x][y]) {
          Draw.Rectangle()
            .starting(x * scale, y * scale)
            .size(scale, scale)
            .color(pixels[x][y])
            .on(previewContext)
        } else if (useBackground) {
          Draw.Rectangle()
            .starting(x * scale, y * scale)
            .size(scale, scale)
            .color(backgroundColor)
            .on(previewContext)
        }
      }
    }

    const imageUrl = previewRef.current.toDataURL()
    setDownloadUrl(imageUrl)

  }, [scale, useBackground])

  const increaseScale = (e) => {
    e.preventDefault()
    setScale(scale + 1)
  }

  const decreaseScale = (e) => {
    e.preventDefault()
    if (scale > 1)
      setScale(scale - 1)
  }

  return (
    <div style={styles.container} className='nes-container with-title is-centered is-rounded'>
      <label className='title'>Save</label>
      <div style={styles.previewContainer}>
        <canvas ref={previewRef} />
      </div>
      <p>{`Size: ${imageSize.w} x ${imageSize.h}`}</p>
      <div style={styles.buttonsContainer}>
        <button className='nes-btn' onClick={decreaseScale}>{'<'}</button>
        <p>{`Scale: ${scale}x`}</p>
        <button className='nes-btn' onClick={increaseScale}>{'>'}</button>
      </div>
      <div>
        <Checkbox
          label='Include Background'
          startingVal={useBackground}
          onChange={() => setUseBackground(!useBackground)}
        />
        <div style={styles.buttonsContainer}>
          <a
            onClick={() => downloadFile()}
            download='tilemapr-image.png'
            href={downloadUrl}
            className={`nes-btn ${downloadUrl ? '' : 'is-disabled'}`}
          >Download</a>
          <button className='nes-btn' onClick={closeDialog}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
