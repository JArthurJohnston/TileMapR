import React from 'react'
import { DialogContext } from './modal/DialogProvider'

const styles = {
  container: {
    backgroundColor: 'white'
  },
  previewContainer: {
    backgroundColor: 'lightgrey'
  }
}

export default function SaveDialog() {
  const {closeDialog} = React.useContext(DialogContext)
  const previewRef = React.useRef()
  return (
    <div style={styles.container} className='nes-container with-title is-centered is-rounded'>
      <label className='title'>Save</label>
      <div style={styles.previewContainer}>
        <canvas ref={previewRef} />
      </div>
      <p>Size: 50 x 50</p>
      <p>Scale: 1x</p>
      <button className='nes-btn'>OK</button>
      <button className='nes-btn' onClick={closeDialog}>Cancel</button>
    </div>
  )
}
