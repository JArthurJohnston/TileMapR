import React, { createContext, useState } from "react"
import Overlay from "./Overlay";

export const DialogContext = createContext()

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState(null);
  const [isVisible, setIsVisible] = React.useState(false)

  const showDialog = (dialog) => {
    console.log('showing', dialog);
    setDialog(dialog)
    setIsVisible(true)
  }

  const closeDialog = () => {
    setIsVisible(false)
    setDialog(null)
  }

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      <Overlay isVisible={isVisible} onClick={closeDialog}>
        {dialog}
      </Overlay>
      {children}
    </DialogContext.Provider>
  )
}
