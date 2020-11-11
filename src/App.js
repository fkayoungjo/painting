import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';
import Playground from './Playground.js'

function App() {
  return (
    <div className="App">
      <Playground />
      <SketchPicker />
    </div>
  );
}

export default App;
