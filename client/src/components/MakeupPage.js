import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function MakeupPage({updateCart}){

    const [makeupArr, setMakeupArr] = useState([]);

    useEffect(() => {
      const fetchMakeup = async () => {
        try {
          const response = await axios.get('/products')
          const filteredMakeup = response.data.filter(product =>
            product.product_categories.some(product_categories => product_categories.category_id === 8))
          setMakeupArr(filteredMakeup)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      };
  
      fetchMakeup()
    }, [])

    const makeupToDisplay = makeupArr.map((product) => {
        return(
            <ProductCard key={product.id} {...product} updateCart={updateCart} />
        )
    })

    return(
        <>
            <h1>Makeup Products</h1>
            {makeupToDisplay}
        </>
    )
}

export default MakeupPage