import React from 'react';
import './ShoppingCart.css';
import Product from '../Product/Product.jsx'

const ShoppingCart = ({shoppingCart}) => {
    return ( 
    <div className="carrito">
        <h2>Tu Carrito de compras</h2>
        {
            shoppingCart.length === 0
            ?   <p>Carrito Vacío</p>
            :shoppingCart.map(( product)=>(
                <Product 
                    key={product.id}
                    product = {product}
                />
            ))
        }
    </div> 
    );
}
 
export default ShoppingCart;