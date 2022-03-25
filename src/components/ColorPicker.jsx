import iro from '@jaames/iro';
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
  }
}

export default function ColorPicker() {
  const { setColor, color } = useContext(PaintbrushContext)
  const [containerStyle, setContainerStyle] = useState(styles.container)
  const ref = useRef()

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
      <button className='nes-btn' onClick={show} style={{ backgroundColor: color }}>Color</button>
      <div style={styles.dialog} >
        <div style={containerStyle} className='nes-container is-rounded'>
          <div ref={ref} />
          <button className='nes-btn' onClick={hide}>OK</button>
        </div>
      </div>
    </>
  )
}
