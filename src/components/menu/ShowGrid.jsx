import React from 'react'
import { SettingsContext } from '../../data'
import { Checkbox } from '../primitives'
import HoverHighlight from './HoverHighlight'

export default function ShowGridMenuItem() {
  const { showGrid, setShowGrid } = React.useContext(SettingsContext)

  return (
    <HoverHighlight>
      <Checkbox
        label='Show Grid'
        onChange={() => setShowGrid(!showGrid)}
        startingVal={showGrid}
      />
    </HoverHighlight>
  )
}
