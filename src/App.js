import { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Counter from './components/Counter/Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hola Coderhouse</h1>
        <img src={"./logo192.png"} alt="react img"/>
        <Counter />
      </div>
    );
  }
}



export default App;
