import MenuItem from "./menu/MenuItem"
import ShowGridMenuItem from "./menu/ShowGridMenuItem"

const style = {
  width: '100%',
  height: '2em',
  display: 'flex',
  alignItems: 'center'
}

export default function MenuBar() {
  return (
    <div className="nes-container" style={style}>
      <MenuItem text={'View'}>
          <ShowGridMenuItem />
      </MenuItem>
    </div>)
}
