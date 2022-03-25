import { useRef, useState } from "react"

const styles = {
  item: {
    height: '100%'
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    zIndex: 1
  }
}

export default function MenuItem({ text, children }) {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const addHover = () => {
    ref.current.style.backgroundColor = 'black'
    ref.current.style.color = 'white'
  }

  const removeHover = () => {
    ref.current.style.backgroundColor = 'white'
    ref.current.style.color = 'black'
    setIsOpen(false)
  }

  return (
    <>
      <div ref={ref} onMouseOver={addHover} onMouseLeave={removeHover} onClick={() => setIsOpen(true)}>
        {text}
        <div style={styles.menu} className="nes-container" hidden={!isOpen}>
          {children}
        </div>
      </div>
    </>

  )
}