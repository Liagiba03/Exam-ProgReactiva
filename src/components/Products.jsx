import React, { useEffect } from 'react'

const Products = ({obtenerDatos, listProducts}) => {
    useEffect(()=>{
        obtenerDatos();
    },[]);

  return (
    
    <>
    <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
              {
                  listProducts.map((product) => (
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                    </tr>
                  ))
              }

                </table>

    </>
  )
}

export default Products