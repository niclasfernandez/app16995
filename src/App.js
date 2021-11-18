import './App.css';
import Button, { logger } from './components/Button'

const ComponentContainer = ({children}) => {
  console.log(children)
  return (
    <div style={{ width: 100, height: 100, backgroundColor: 'blue'}}>
      {/* {children.map(c => (
        <div style={{ width: 50, height: 50, backgroundColor: 'red'}}>
          {c}
        </div>
      ))} */}
      {children}
    </div>
  )
}

const App = () => {
  const labels = [{id: 1, text: 'Aceptar', color: 'red', padding: 10}, {id: 2, text: 'Cancelar', color: 'blue' , padding: 20}, {id: 3, text: 'Eliminar', color: 'black', padding: 30}]
  logger()
  return (
    <div className="App">
      <h1>Hola Coderhouse</h1>
      {labels.map(label => 
       <Button key={label.id} label={label.text} color={label.color} padding={label.padding}/>
      )}

      <ComponentContainer>
        <Button label='children' color='green'/>
      </ComponentContainer>

      <ComponentContainer>
        <p style={{color: 'white'}}> OTRO CHILDREN</p>
        <p style={{color: 'white'}}> OTRO CHILDREN</p>
      </ComponentContainer>
      
      <ComponentContainer children={<p style={{color: 'white'}}> OTRO CHILDREN</p>}/>    
    </div>
  );
}

export default App;
