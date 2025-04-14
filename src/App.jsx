import React, {useEffect, useState } from 'react'
import Products from './components/Products';
import Header from './components/Header/Header';

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtredList, setFiltredList] = useState([]);

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
    obtenerDatos();
  },[]);

  useEffect(()=>{
    if (busqueda === "") {
      setFiltredList(listProducts); // Si no hay búsqueda, muestra todos los productos
    } else {
      filtrarProductos();
    }
  },[busqueda, listProducts]);

  return (
    <>
      <Header />

          <input
            type="text"
            id="txtFIltro"
            placeholder="Buscar por nombre o categoria..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Products listProducts={filtredList} obtenerDatos={obtenerDatos} />

    </>
  );
}

export default App