import React from 'react'
import { SettingsContext } from '../../data'
import HoverHighlight from './HoverHighlight'

export default function ShowGridMenuItem() {
  const { showGrid, setShowGrid } = React.useContext(SettingsContext)

  return (
    <HoverHighlight>
      <label>
        <input type="checkbox" className="nes-checkbox" checked={showGrid} onChange={() => setShowGrid(!showGrid)} />
        <span>Show Grid</span>
      </label>
    </HoverHighlight>
  )
}
