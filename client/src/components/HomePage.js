import React from "react";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

function HomePage({ productsArray, updateCart }) {

    // console.log(productsArray)
    const productsToDisplay = productsArray.map((product) => {
        return(
            <ProductCard key={product.id} {...product} updateCart={updateCart} />
        )
    })

    return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsToDisplay}
      </div>
    </div>
    )
}

export default HomePage