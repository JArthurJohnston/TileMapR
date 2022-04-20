import iro from '@jaames/iro';
import React, { useEffect, useRef, useState } from 'react';

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'none',
    flexDirection: 'column'
  },
  dialog: {
    position: 'absolute',
  },
  tooltipAnchor: {
    position: 'relative'
  },
  buttonContainer : {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '1em',
  }
}

export default function ColorPicker({ onChange, color, buttonText }) {
  const [isVisible, setIsVisible] = useState(false)
  const [chosenColor, setChosenColor] = useState(color)
  const [containerStyle, setContainerStyle] = useState(styles.container)
  const colorPickerElementRef = useRef()

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    isVisible ? show() : hide()
  }, [isVisible])

  const show = () => {
    setContainerStyle({
      ...styles.container,
      display: 'flex'
    })
  }

  const hide = () => {
    setContainerStyle({
      ...styles.container,
      display: 'none'
    })
  }

  useEffect(() => {
    var colorPicker = new iro.ColorPicker(colorPickerElementRef.current);
    colorPicker.on('color:change', function (color) {
      setChosenColor(color.hexString)
    });
  }, [])

  const updateColor = React.useCallback(() => {
    onChange(chosenColor)
    toggle()
  }, [chosenColor])

  return (
    <>
      <button className='nes-btn' onClick={toggle} style={{ backgroundColor: color }}>{buttonText}</button>
      <div style={styles.tooltipAnchor}>
        <div style={styles.dialog} >
          <div style={containerStyle} className='nes-container is-rounded'>
            <div ref={colorPickerElementRef} />
            <div style={styles.buttonContainer}>
              <button className='nes-btn' style={{ backgroundColor: chosenColor }} onClick={updateColor}>OK</button>
              <button className='nes-btn' onClick={toggle}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
