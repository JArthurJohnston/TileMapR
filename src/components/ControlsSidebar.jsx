import { PaintbrushColorPicker } from "./color-pickers"
import ToolSelector from "./ToolSelector"

const styles = {
  sidebar: {
    minHeight: "20em",
    height: '100%',
    minWidth: '12em',
    maxWidth: '15em',
    borderRight: '4px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  item: {
    marginTop: '1em'
  }
}

const toolStyles = {
  button: {
    width: '100%'
  }
}

export default function ControlsSidebar() {
  return (
    <div style={styles.sidebar}>
      <div style={styles.item}>
        <PaintbrushColorPicker />
      </div>
      <div style={styles.item}>
        <ToolSelector />
      </div>
    </div>)
}
