import React from "react";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

function HomePage({ productsArray }) {

    // console.log(productsArray)
    const productsToDisplay = productsArray.map((product) => {
        return(
            <ProductCard key={product.id} {...product} />
        )
    })

    return (
        <>
            {productsToDisplay}
        </>
    )
}

export default HomePage