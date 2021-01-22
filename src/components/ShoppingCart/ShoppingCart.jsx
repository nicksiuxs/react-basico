import React from 'react';
import './ShoppingCart.css';
import Product from '../Product/Product.jsx'

const ShoppingCart = ({shoppingCart, addProduct}) => {
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
                    shoppingCart= {shoppingCart}
                    addProduct = {addProduct}
                />
            ))
        }
    </div> 
    );
}
 
export default ShoppingCart;