import React, { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Categories(){

    // const [catArr, setCatArr] = useState([])

    // useEffect(() => {
    //     fetch("/categories")
    //     .then(resp => resp.json())
    //     .then((data) => setCatArr(data))
    // },[])
    
    // const handleClick = () => {
    //     catArr.map((category) => {
    //         if (category.name == "Makeup"){
    //             return console.log("hi it worked")
    //         }
    //     })
    // }

    const history = useHistory()

    const [makeupCategory, setMakeupCategory] = useState(null);

    const handleClick = async () => {
      try {
        const response = await axios.get('/categories');
        const makeupCategory = response.data.find(category => category.name === "Makeup");
  
        if (makeupCategory) {
          setMakeupCategory(makeupCategory);
          <CategoryPage key={makeupCategory.id} {...makeupCategory} />
          history.push('/categorypage')
          console.log(makeupCategory);
        } else {
          console.log("Makeup category not found");
        }
      } catch (error) {
        console.error('Error during get:', error);
      }
    }


    return(
        <div className= "flex justify-evenly space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <button onClick={handleClick}>Makeup</button>
            <button>Skin Care</button>
            <button>Hair Care</button>
        </div>  
    )
}

export default Categories