import React from 'react'

const styles = {
  main: {
    width: '100%',
    height: '100%'
  }
}

export default function HoverHighlight({ children }) {
  const hoverRef = React.useRef()

  const addHover = () => {
    console.log('hovering');
    hoverRef.current.style.backgroundColor = 'black'
    hoverRef.current.style.color = 'white'
  }

  const removeHover = () => {
    console.log('not hovering');
    hoverRef.current.style.backgroundColor = 'white'
    hoverRef.current.style.color = 'black'
  }

  return (
    <div ref={hoverRef} onMouseOver={addHover} onMouseLeave={removeHover} style={styles.main}>
      {children}
    </div>
  )
}