import  { useState, useEffect } from 'react' 
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Counter from './components/Counter/Counter'

const TestComponent = ({title}) => {
  useEffect(() => {
    console.log('El componente se monto')
    
    return (() => {
      console.log('El componente se va a desmontar')
    })
  }, [title])

  console.log('Se va a montar')

  return (
    <div>
      <h3>Test Component</h3>
      <p>{title}</p>
    </div>
  )
}


const App = () => {
  const [title, setTitle] = useState('Hola camada 16995')
  const [show, setShow] = useState(true)

    return (
      <div className="App">
        <Navbar />
        <h1>{title}</h1>
        <img src={"./logo192.png"} alt="react img"/>
        <button onClick={() => setTitle('Cambiamos el titulo')}>Cambiar titulo</button>
        <button onClick={() => setTitle('Hola camada 16995')}>Reset</button>
        <Counter />
        {
          show && <TestComponent title={title} /> //Aca hay un renderizado condicional que vamos a revisar mas adelante.
        }  
        <button onClick={() => setShow(false)}>Desmontar</button>
      </div>
    );
}



export default App;
