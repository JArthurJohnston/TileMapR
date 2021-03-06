import React from 'react'

const styles = {
  main: {
    width: '100%',
    height: '100%'
  }
}

export default function HoverHighlight({ children, onClick}) {
  const hoverRef = React.useRef()

  const addHover = () => {
    hoverRef.current.style.backgroundColor = 'black'
    hoverRef.current.style.color = 'white'
  }

  const removeHover = () => {
    hoverRef.current.style.backgroundColor = 'white'
    hoverRef.current.style.color = 'black'
  }

  return (
    <div onClick={onClick} ref={hoverRef} onMouseOver={addHover} onMouseLeave={removeHover} style={styles.main}>
      {children}
    </div>
  )
}