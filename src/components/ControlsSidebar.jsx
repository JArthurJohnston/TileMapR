import ColorPicker from "./ColorPicker"

const style = {
  minHeight: "20em",
  height: '100%',
  width: '12em',
  borderRight: '4px solid black',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  padding: '1em',
}

export default function ControlsSidebar() {
  return (
  <div style={style}>
    <ColorPicker />
  </div>)
}
