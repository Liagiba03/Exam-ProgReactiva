import React, { useEffect, useState } from 'react'
import {Grafica} from './Grafica';

const Products = ({ obtenerDatos, listProducts }) => {
  const [mostrarGrafica, setMostrarGrafica] = useState(false);

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      {mostrarGrafica ? (<Grafica listProducts={listProducts} obtenerDatos={obtenerDatos}/>
    ): (
      <>
      <button onClick={() => setMostrarGrafica(true)}>Ver gráfico</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {
            listProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          }
        </tbody>


      </table>

    </>)}

    </>
  )
}

export default Products



