import React from 'react'
import { ImageContext } from '../../data'
import HoverHighlight from './HoverHighlight'

export default function ResolutionMenu() {
  const { resolution } = React.useContext(ImageContext)
  return (
    <HoverHighlight>
      <label>
        {`Resolution Width: ${resolution.width} Height: ${resolution.height}`}
      </label>
    </HoverHighlight>
  )
}