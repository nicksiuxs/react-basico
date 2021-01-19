import React, { Fragment, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Product from './components/Product/Product.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  // Crear listado de productos
  const [products, saveProducts] = useState([
    { id: 1, nombre: "camisa R3ctJS", precio: 50 },
    { id: 2, nombre: "camisa AngularJS", precio: 40 },
    { id: 3, nombre: "camisa VueS", precio: 30 },
    { id: 4, nombre: "camisa JS", precio: 20 },
  ]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Nueva tienda" />
      <h1>Lista de productos</h1>
      {
        products.map(product => (
          <Product 
          key={product.id}
          product={product}
          />
        ))
      }
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
