import React, {useEffect, useState } from 'react'
import Products from './components/Products';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)
  const [listProducts, setListProducts] = useState([]);



  const obtenerDatos = async () =>{
    var response;
    response = await fetch(`https://fakestoreapi.com/products`);
    if(response.status ==200){
      const tareas = await response.json();
      setListProducts(tareas);
      console.log(tareas);
    }
  }

    useEffect(()=>{
    console.log("useEffect");
    obtenerDatos();
  },[]);

  return (
    <>
      <Header />
      <input type="text" name="" id="txtFIltro" placeholder='Buscar por nombre o categoria...' />
      <Products 
        obtenerDatos={obtenerDatos}
        listProducts={listProducts}
      />
    </>
  )
}

export default App