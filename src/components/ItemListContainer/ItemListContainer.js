import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const [productsEffect, setProductsEffect] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
        .then(response => {
            return response.json()
        }).then(res => {
           setProductsEffect(res.results.slice(0,5))
        })

    }, [])

    const handleClick = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            return response.json()
        }).then(res => {
           setProducts(res.results.slice(0,5))
        })
    }

    console.log(products)
    return (
        <div className="ItemListContainer" >
            <div>
                <input type="text" onChange={(evt) => setInput(evt.target.value)}/>
                <button onClick={handleClick}>Search</button> 
            </div>
            <ItemList products={products} />
            <ItemList products={productsEffect} />
        </div>
    )    
    
}

export default ItemListContainer