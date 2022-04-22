import ControlsSidebar from './components/ControlsSidebar';
import MenuBar from './components/menu/MenuBar';
import Canvas, { Grid } from './components/canvas'
import GlobalData from './data';
import DrawingArea from './components/canvas/DrawingArea';
import Overlay from './components/modal/Overlay';

const styles = {
  container: {
    height: '91vh'
  },
  main: {
    display: 'flex',
    height: '100%',
  },
  bottomBar: {
    height: '2em',
    borderTop: '3px solid black',
  }
}

function App() {
  return (
    <GlobalData>
      <div style={styles.container}>
        <MenuBar />
        <div style={styles.main}>
          <ControlsSidebar />
          <Canvas>
            <Grid isVisible={false} />
            <DrawingArea />
          </Canvas>
        </div>
        <div style={styles.bottomBar}>
        </div>
      </div>
    </GlobalData>
  );
}

export default App;
