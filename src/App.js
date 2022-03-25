import ControlsSidebar from './components/ControlsSidebar';
import MenuBar from './components/MenuBar';
import ProjectProvider from './data/ProjectProvider';
import SpriteProvider from './data/SpriteProvider';
import Canvas, { Grid } from './components/canvas'
import {PaintbrushProvider, SettingsProvider} from './data';

const styles = {
  container: {
    height: '93vh'
  },
  main: {
    display: 'flex',
    height: '100%',
  }
}

function App() {
  return (
    <>
      <SettingsProvider>
        <ProjectProvider>
          <SpriteProvider>
            <PaintbrushProvider>
              <div style={styles.container}>
                <MenuBar />
                <div style={styles.main}>
                  <ControlsSidebar />
                  <Canvas resolution={{ x: 100, y: 100 }}>
                    <Grid isVisible={false} />
                  </Canvas>
                </div>
              </div>
            </PaintbrushProvider>
          </SpriteProvider>
        </ProjectProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
