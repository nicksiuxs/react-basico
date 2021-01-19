const Producto = ({product}) => {
    const {id, nombre, precio} = product;
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>
    );
}
 
export default Producto;