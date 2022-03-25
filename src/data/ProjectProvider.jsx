import { createContext, useState } from "react"
import Project from '../models/Project'

const testProject = new Project('testy-mcTesttest', 20);
export const ProjectContext = createContext(testProject)

export default function ProjectProvider({children}) {
  const [project, setProject] = useState(testProject);
  const [spriteResolution, setSpriteResolution] = useState(20)

  return (
    <ProjectContext.Provider value={{
      project,
      spriteResolution
    }}>
      {children}
    </ProjectContext.Provider>
  )
}
