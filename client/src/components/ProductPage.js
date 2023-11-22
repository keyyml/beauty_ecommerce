import React from "react";

function ProductPage(){

const [productsArray, setProductsArray] = useState([])

    useEffect(() => {
        fetch("/products")
        .then(resp=>resp.json())
        .then((data)=>{
            // console.log(data)
            setProductsArray(data)
        })
    }, [])

    const productsToDisplay = productsArray.map((product) => {
        return (
            <div key = {product.id} className="prodCard">
                <h1>{product.name}</h1>
                <h3>{product.brand}</h3>
            </div>
        )
    })

    return(
        <>
        </>
    )
}