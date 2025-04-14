import React, { useEffect, useState } from 'react'
import {Grafica} from './Grafica';

const Products = ({ obtenerDatos, listProducts }) => {

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
      <>
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



