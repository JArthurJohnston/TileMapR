import React, { createContext, useState } from "react"
import Overlay from "./Overlay";

export const DialogContext = createContext()

export function DialogProvider({ children }) {
  const [dialog, showDialog] = useState(null);

  const closeDialog = () => {
    showDialog(null)
  }

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      <Overlay isVisible={dialog !== null} onClick={() => {}}>
        {dialog}
      </Overlay>
      {children}
    </DialogContext.Provider>
  )
}
