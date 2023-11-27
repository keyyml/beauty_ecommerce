import React from "react"

function ProductCard({ name, price, image, brand }){

    return( 
        <div className="card">
            <img alt="product img" title={brand} width="200" height="100" />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>{price}</p> 
        </div>
    )
}

export default ProductCard