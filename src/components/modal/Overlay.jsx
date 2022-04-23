import React from 'react'
import { Layers } from '../canvas'

const styles = {
  background: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    zIndex: Layers.OVERLAY,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default function ({ isVisible, onClick, children }) {
  const [style, setStyle] = React.useState(styles.background)
  
  React.useEffect(() => {
      setStyle({
        ...styles.background,
        display: isVisible ? 'flex' : 'none'
      })
  }, [isVisible])

  return (
    <div style={style} onClick={onClick}>{children}</div>
  )
}