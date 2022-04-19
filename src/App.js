import ControlsSidebar from './components/ControlsSidebar';
import MenuBar from './components/menu/MenuBar';
import Canvas, { Grid } from './components/canvas'
import GlobalData from './data';
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
      </div>
    </GlobalData>
  );
}

export default App;
