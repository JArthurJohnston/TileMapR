import React from 'react'
import { SettingsContext } from '../../data'

export default function ShowGrid() {
  const { showGrid, setShowGrid } = React.useContext(SettingsContext)

  return (
    <label>
      <input type="checkbox" className="nes-checkbox" checked={showGrid} onChange={() => setShowGrid(!showGrid)} />
      <span>Show Grid</span>
    </label>
  )
}
