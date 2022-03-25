import ColorPicker from "./ColorPicker"

const style = {
  minHeight: "20em",
  height: '100%',
  width: '12em',
}

export default function ControlsSidebar() {
  return (
  <div style={style} className="nes-container">
    <ColorPicker />
  </div>)
}
