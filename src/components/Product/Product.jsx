const Producto = ({product, shoppingCar, addProduct, products}) => {
    const {id, nombre, precio} = product;

    // Agregar producto al carrito
    const seleccionarProducto = (id)=>{
        const producto = products.filter(product => product.id === id)[0];
        addProduct([...shoppingCar , producto]);
        
    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={()=> seleccionarProducto(id)}
            >Comprar</button>
        </div>
    );
}
 
export default Producto;