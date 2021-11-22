import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {      
    return (
        <nav className="NavBar">
      <div>
          <h3>MARKETapp</h3>
      </div>
      <div className="Categories">
        <button className='Option'>Celulares</button>
        <button className='Option'>Tablets</button>
        <button className='Option'>Notebooks</button>
      </div>
            <CartWidget />
    </nav>
    )
}

export default NavBar