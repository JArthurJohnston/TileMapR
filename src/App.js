import ControlsSidebar from './components/ControlsSidebar';
import MenuBar from './components/menu/MenuBar';
import ProjectProvider from './data/ProjectProvider';
import SpriteProvider from './data/SpriteProvider';
import Canvas, { Grid } from './components/canvas'
import {PaintbrushProvider, SettingsProvider} from './data';
import DrawingArea from './components/canvas/DrawingArea';

const styles = {
  container: {
    height: '94vh'
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
                  <Canvas resolution={{ x: 50, y: 50 }}>
                    <Grid isVisible={false} />
                    <DrawingArea />
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
