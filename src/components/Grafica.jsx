import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Products from './Products';

Chart.register(CategoryScale, LinearScale, BarElement);

export const Grafica = ({ listProducts, obtenerDatos }) => {
  const [categorias, setCategorias] = useState([]);
  const [cantidad, setCantidad] = useState([]);
  const [mostrarTabla, setMostraerTabla] = useState(false);

  useEffect(() => {
    const categoriasUnicas = [...new Set(listProducts.map(product => product.category))];
    setCategorias(categoriasUnicas);

    const cantidadPorCategoria = categoriasUnicas.map(categoria => {
      return listProducts.filter(product => product.category === categoria).length;
    });
    setCantidad(cantidadPorCategoria);
  }, [])

  return (
    <>
    
        <>
          <button onClick={() => setMostraerTabla(true)}>Mostrar Tabla</button>
          <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Products by category</h2>
            <Bar
              data={
                {
                  labels: categorias,
                  datasets: [
                    {
                      label: "Cantidad de productos",
                      data: cantidad,
                      borderWidth: 1,
                      backgroundColor: [
                        "rgba(48, 35, 231, 0.8)",
                      ]
                    }
                  ]
                }
              }
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Users Gained between 2016-2020"
                  },
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </>
      )}
    </>
  );
}