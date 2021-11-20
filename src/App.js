import { Component } from 'react'
import './App.css';
import Button from './components/Button'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {count : 0}
  }

  render() {
    const increment = () =>{
      this.setState ({
        count: this.state.count + 1
      })
    }

    const decrement = () => {
      this.setState ({
        count: this.state.count - 1
      })
    }

    const reset = () => {
      this.setState ({
        count: 0
      })
    }

    return (
      <div className="App">
        <h1>Hola Coderhouse</h1>
        <h1>{this.state.count}</h1>
        <img src={"./images/imagen.png"} alt="react img"/>
        <button onClick={() => decrement()}>Decrementar</button>
        <button onClick={() => reset()}>Resetear</button>
        <Button func={reset} label={'Reset'}/>
        <button onClick={() => increment()}>Incrementar</button>
      </div>
    );
  }
}



export default App;
