import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
    return (
      <div className="App">
        <Navbar />
        <ItemListContainer/>
      </div>
    );
}



export default App;
