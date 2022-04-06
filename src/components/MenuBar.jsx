import MenuItem from "./menu/MenuItem"
import ShowGridMenuItem from "./menu/ShowGridMenuItem"

const style = {
  width: '100%',
  height: '2em',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '4px solid black',
  justifyContent: 'space-between',
  padding: '1.5em',
}

export default function MenuBar() {
  return (
    <div style={style}>
      <MenuItem text={'View'}>
          <ShowGridMenuItem />
      </MenuItem>
    </div>)
}
