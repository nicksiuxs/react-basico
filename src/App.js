import React, { Fragment } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  // Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Nueva tienda" />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
