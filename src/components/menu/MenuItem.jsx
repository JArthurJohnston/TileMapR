import { useRef, useState } from "react"

const styles = {
  item: {
    marginLeft: '1em'
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    zIndex: 5
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
    <div style={styles.item} ref={ref} onMouseOver={addHover} onMouseLeave={removeHover} onClick={() => setIsOpen(true)}>
      {text}
      <div style={styles.menu} className="nes-container" hidden={!isOpen}>
        {children}
      </div>
    </div>
  )
}