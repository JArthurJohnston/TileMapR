import { BackgroundColorPicker } from "../color-pickers"
import MenuItem from "./MenuItem"
import ResizeMenuItem from "./ResizeMenuItem"
import Save from "./Save"
import ShowGrid from "./ShowGrid"

const style = {
  width: '100%',
  height: '2em',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '4px solid black',
  justifyContent: 'flex-start',
  paddingTop: '1.5em',
  paddingBottom: '1.5em',
}

export default function MenuBar() {
  return (
    <div style={style}>
      <MenuItem text='File'>
        <Save/>
      </MenuItem>
      <MenuItem text={'View'}>
        <ShowGrid />
        <ResizeMenuItem />
      </MenuItem>
      <MenuItem text="Drawing">
        <BackgroundColorPicker />
      </MenuItem>
    </div>)
}
