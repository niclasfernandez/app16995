import './Item.css'

const Item = ({ product }) => {
    console.log('Aca tengo cada producto', product)
    return (
        <div className="CardItem">
        <div className="ContainerItem">
            <h2 className="ItemHeader">
                {product.title}
            </h2>
        </div>
        <img src={product.thumbnail} alt={product.name} className="ItemImg"/>
        <p className="Info">
            Categoria: {product.category_id}
        </p>

        <p className="Info">
            Precio: {product.price}
        </p>
        <button>Ver detalle</button>
        </div>
    )
}

export default Item