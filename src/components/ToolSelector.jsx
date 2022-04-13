import React from 'react'
import { PaintbrushContext } from '../data'
import { PEN, FILL, ERASER } from './canvas/painting/drawTools'

const styles = {
  button: {
    width: '100%'
  }
}

export default function ToolSelector() {
  const { tool, updateTool } = React.useContext(PaintbrushContext)

  return (
    <div className="nes-container with-title is-centered">
      <label className="title">Tools</label>
      <ToolButton tool={PEN} selectedTool={tool} setSelection={updateTool} />
      <ToolButton tool={FILL} selectedTool={tool} setSelection={updateTool} />
      <ToolButton tool={ERASER} selectedTool={tool} setSelection={updateTool} />
    </div>
  )
}

function ToolButton({ tool, selectedTool, setSelection }) {
  return (
    <button
      style={styles.button}
      className={`nes-btn ${selectedTool === tool ? 'is-primary' : ''}`}
      onClick={() => setSelection(tool)}
    >
      {tool.label}
    </button>
  )
}