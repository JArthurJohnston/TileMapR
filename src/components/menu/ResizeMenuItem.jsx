import React from 'react'
import { DialogContext } from '../modal/DialogProvider'
import ResizeDialog from '../ResizeDialog'
import HoverHighlight from './HoverHighlight'

export default function ResizeMenuItem() {
  const { showDialog, closeDialog } = React.useContext(DialogContext)

  const dialog = <ResizeDialog onClose={closeDialog} />
  return(
    <HoverHighlight onClick={() => showDialog(dialog)}>
      <label>Resize</label>
    </HoverHighlight>
  )
}