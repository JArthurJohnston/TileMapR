import React from 'react'
import { DialogContext } from '../modal/DialogProvider'
import SaveDialog from '../SaveDialog'
import HoverHighlight from './HoverHighlight'

export default function Save() {
  const { showDialog, closeDialog } = React.useContext(DialogContext)

  const dialog = <SaveDialog isVisible={showDialog} onClose={closeDialog} />
  return (
    <>
      <HoverHighlight onClick={() => showDialog(dialog)}>
        <label>Save</label>
      </HoverHighlight>
    </>
  )
}