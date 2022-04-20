import { useRef, useState } from "react"
import { Layers } from "../canvas"
import HoverHighlight from "./HoverHighlight"

const styles = {
  item: {
    marginLeft: '1em'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    zIndex: Layers.MENU
  }
}

export default function MenuItem({ text, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={styles.item} onMouseLeave={() => setIsOpen(false)} onClick={() => setIsOpen(true)}>
      <HoverHighlight>
        <div style={styles.menu} className="nes-container" hidden={!isOpen}>
          {children}
        </div>
        {text}
      </HoverHighlight>
    </div>
  )
}