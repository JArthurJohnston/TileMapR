import React from 'react'
import { PaintbrushContext } from '../data'
import { PEN, FILL, ERASER } from './canvas/painting/drawTools'

const styles = {
  button: {
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '1em',
  }
}

export default function ToolSelector() {
  const { tool, updateTool } = React.useContext(PaintbrushContext)

  return (
    <div style={styles.container}>
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