import { useEffect, useState } from "react";
import { mockProducts } from "../../data/mockProducts";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {category} = useParams()

  useEffect(() => {
    if (!category) {
      mockProducts()
        .then(resultado => { setProducts(resultado) })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }else{
      mockProducts()
      .then(resultado => { setProducts(resultado.filter(products=>products.category === category)) })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
    }
  }, [category])


  /* const handleProductFilter = ({ filterState, filterChange }) => (
    <div>
      <h2>Buscar Producto</h2>
      {filterState}
      <input type="text" value={filterState} onChange={filterChange} />
    </div>
  ) */

  return (
    <>
      {/* <center>
        <Filter>
          {handleProductFilter}
        </Filter>
      </center> */}
      
      {isLoading ?
        <h2>Cargando...</h2>
        :
        <ItemList products={products} />
      }
    </>
  )
}
