const Producto = ({product, shoppingCart, addProduct, products}) => {
    const {id, nombre, precio} = product;

    // Agregar producto al carrito
    const seleccionarProducto = (id)=>{
        const producto = products.filter(product => product.id === id)[0];
        addProduct([...shoppingCart , producto]);
        
    }

    // Eliminar Producto
    const eliminarProducto = (id)=>{
        const productos = shoppingCart.filter(producto => product.id !== id); 
        addProduct(productos);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            
            {
                products
                ? (
                    <button 
                        type="button"
                        onClick={()=> seleccionarProducto(id)}
                    >Comprar</button>
                )
                :(
                    <button 
                    type="button"
                    onClick={()=> eliminarProducto(id)}
                    >Eliminar</button>
                )
            }
        </div>
    );
}
 
export default Producto;