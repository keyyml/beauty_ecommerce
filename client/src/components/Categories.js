import React, { useEffect, useState } from "react";

function Categories(){

    const [catArr, setCatArr] = useState([])

    useEffect(() => {
        fetch("/categories")
        .then(resp => resp.json())
        .then((data) => setCatArr(data))
    },[])
    
    

    return(
        <>
        </>  
    )
}

export default Categories