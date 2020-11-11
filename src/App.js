import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';
import Playground from './Playground.js'

function App() {
  const [color, setColor] = useState(null);

  function handleChangeComplete(color) = {
    this.setState({ background: color.hex });
  };

  return (
    <div className="App">
      <Playground />
      <SketchPicker color={ color }
      onChangeComplete={ handleChangeComplete }/>
    </div>
  );
}

export default App;
