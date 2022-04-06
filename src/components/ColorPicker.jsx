import iro from '@jaames/iro';
import { useCallback } from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { PaintbrushContext } from '../data/PaintbrushProvider';

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'none',
    flexDirection: 'column'
  },
  dialog: {
    position: 'absolute'
  },
  tooltipAnchor: {
    position: 'relative'
  }

}

export default function ColorPicker() {
  const [isVisible, setIsVisible] = useState(false)
  const { setColor, color } = useContext(PaintbrushContext)
  const [containerStyle, setContainerStyle] = useState(styles.container)
  const ref = useRef()

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
    var colorPicker = new iro.ColorPicker(ref.current);
    colorPicker.on('color:change', function (color) {
      setColor(color.hexString)
    });
  }, [])

  return (
    <>
      <button className='nes-btn' onClick={toggle} style={{ backgroundColor: color }}>Color</button>
      <div style={styles.tooltipAnchor}>
        <div style={styles.dialog} >
          <div style={containerStyle} className='nes-container is-rounded'>
            <div ref={ref} />
            <button className='nes-btn' onClick={toggle}>OK</button>
          </div>
        </div>
      </div>
    </>
  )
}
