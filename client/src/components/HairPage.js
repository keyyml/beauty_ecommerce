import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function HairPage({updateCart}){

    const [prodsArr, setProdsArr] = useState([]);

    useEffect(() => {
      const fetchProds = async () => {
        try {
          const response = await axios.get('/products')
          const filteredProds = response.data.filter(product =>
            product.product_categories.some(product_categories => product_categories.category_id === 6))
          setProdsArr(filteredProds)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      };
  
      fetchProds()
    }, [])

    const prodsToDisplay = prodsArr.map((product) => {
        return(
            <ProductCard key={product.id} {...product} updateCart={updateCart} />
        )
    })

    return(
        <>
            <h1>Hair Care Products</h1>
            {prodsToDisplay}
        </>
    )
}

export default HairPage