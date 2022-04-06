import { useContext, useState } from "react"
import {SettingsContext} from '../../data'

export default function ShowGridMenuItem() {
  const {showGrid, setShowGrid} = useContext(SettingsContext)

  return (
    <label>
      <input type="checkbox" className="nes-checkbox" checked={showGrid} onChange={() => setShowGrid(!showGrid)}/>
      <span>Show Grid</span>
    </label>
  )
}
