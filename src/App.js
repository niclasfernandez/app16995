import  { useState, useEffect } from 'react' 
import './App.css';
import Navbar from './components/Navbar/Navbar'

function getItems(){
  return new Promise((resolve, reject) =>{
   const object = [
     {
       id:'1',
       name:'Audífonos',
       description:'Audífonos Havit',
       stock:20
     },
     {
       id:'2',
       name:'Parlantes',
       description:'Parlantes JBL',
       stock:25
     },
     {
       id:'3',
       name:'Audífonos Gamer',
       description:'Audífonos para tu PC',
       stock:30
     }
   ]
      setTimeout(() => resolve(object), 3000 )

  })
}

const ItemList = ({items}) => {
  console.log(items)
  return (
    <div>
      <ul>
        {items.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}


const App = () => {
  const [listProduct, setListProduct] = useState([])

  useEffect(() => {
    const list = getItems()

    list.then(response => {
      console.log(response)
      setListProduct(response)
    })
  }, [])

  console.log(listProduct)
    return (
      <div className="App">
        <Navbar />
        <ItemList items={listProduct}/>
      </div>
    );
}



export default App;
