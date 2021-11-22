import { Component } from 'react'
import Button from '../Button/Button'

class Counter extends Component {
    constructor (props) {
      super(props)
      this.state = {count : 0}
    }
  
    increment = () => {
      this.setState ({
        count: this.state.count + 1
      })
    }
  
    decrement = () =>{
      this.setState ({
        count: this.state.count - 1
      })
    }
  
    reset = () => {
      this.setState ({
        count: 0
      })
    }
  
    render() {
      return (
        <>
          <h2>Counter</h2>
          <h3>{this.state.count}</h3>
          <button onClick={() => this.decrement()}>Decrementar</button>
          <button onClick={() => this.reset()}>Resetear</button>
          <Button func={this.reset} label={'Reset'}/>
          <button onClick={() => this.increment()}>Incrementar</button>
        </>
      );
    }
  }

  export default Counter