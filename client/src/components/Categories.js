import React, { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";

function Categories(){

    const [catArr, setCatArr] = useState([])

    useEffect(() => {
        fetch("/categories")
        .then(resp => resp.json())
        .then((data) => setCatArr(data))
    },[])
    
    const catSelect = catArr.map((category) => {
        return(
            <CategoryPage key={category.id} {...category}/>
        )
    })

    // console.log(catSelect[1])

    return(
        <>
            {catSelect}
        </>  
    )
}

export default Categories