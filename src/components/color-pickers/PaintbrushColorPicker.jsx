import React from 'react'
import { PaintbrushContext } from '../../data'
import ColorPicker from './ColorPicker'

export default function PaintbrushColorPicker() {
  const {color, setColor} = React.useContext(PaintbrushContext)
  return(
    <ColorPicker color={color} onChange={setColor} buttonText='Color'/>
  )
}
