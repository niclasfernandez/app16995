import './Navbar.css'
import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { getCategories } from '../../products'

const NavBar = () => {      
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const listCategories = getCategories()
      listCategories.then(cat => {
        setCategories(cat)
      })
      return () => {
        setCategories([])
      }
    }, [])

    return (
        <nav className="NavBar">
          <div>
              <h3>MARKETapp</h3>
          </div>
          <div className="Categories">
            {categories.map(c => <button key={c.id} className='Option'>{c.description}</button>)}
          </div>
          <CartWidget />
        </nav>
    )
}

export default NavBar