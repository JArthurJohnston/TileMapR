import React from "react"
import {PEN, getTool} from "../components/canvas/painting/drawTools";
import useStorage from "../hooks/useStorage";
import { Data } from "./Storage";

export const PaintbrushContext = React.createContext()

const defaultTool = PEN

export default function PaintbrushProvider({children}) {
  const [color, setColor] = useStorage(Data.BRUSH_COLOR);
  const [toolName, setToolName] = useStorage('current-tool', defaultTool.label)
  const [tool, setTool] = React.useState(defaultTool)

  React.useEffect(() => {
    const newTool = getTool(toolName)
    setTool(newTool)
  }, [toolName])

  const updateTool = (tool) => {
    setTool(tool)
    setToolName(tool.label)
  }

  return (
    <PaintbrushContext.Provider value={{setColor, color, tool, updateTool}}>
      {children}
    </PaintbrushContext.Provider>
  )
}
