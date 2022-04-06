import React from 'react'
import { SettingsContext } from '../../data'
import { CanvasContext } from './CanvasProvider'

export default function Background() {
  const { size } = React.useContext(CanvasContext)
  const { backgroundColor } = React.useContext(SettingsContext)
  const ref = React.useRef()

  const style = {
    width: size.width,
    height: size.height,
    position: 'absolute',
    backgroundColor
  }

  React.useEffect(() => {
    ref.current.width = size.width
    ref.current.height = size.height
  }, [])

  return (
    <div ref={ref} style={style} />
  )
}
