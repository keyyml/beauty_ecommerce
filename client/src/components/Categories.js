import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MakeupPage from "./MakeupPage";
import HairPage from "./HairPage"; 
import SkinPage from "./SkinPage";

function Categories(){

    const history = useHistory()

    const [makeupCategory, setMakeupCategory] = useState({});
    const [hairCategory, setHairCategory] = useState({});
    const [skinCategory, setSkinCategory] = useState({});

    const handleMClick = async () => {
      try {
        const response = await axios.get('/categories');
        const makeupCategory = response.data.find(category => category.name === "Makeup");
  
        if (makeupCategory) {
          setMakeupCategory(makeupCategory);
          <MakeupPage key={makeupCategory.id} {...makeupCategory} />
          history.push('/makeup-page')
          console.log(makeupCategory);
        } else {
          console.log("Makeup category not found");
        }
      } catch (error) {
        console.error('Error during get:', error);
      }
    }

    const handleHClick = async () => {
      try {
        const response = await axios.get('/categories');
        const hairCategory = response.data.find(category => category.name === "Hair Care");
  
        if (hairCategory) {
          setHairCategory(hairCategory);
          <HairPage key={hairCategory.id} {...hairCategory} />
          history.push('/hair-page')
          console.log(hairCategory);
        } else {
          console.log("hair category not found");
        }
      } catch (error) {
        console.error('Error during get:', error);
      }
    }

    const handleSClick = async () => {
      try {
        const response = await axios.get('/categories');
        const skinCategory = response.data.find(category => category.name === "Skin Care");
  
        if (skinCategory) {
          setSkinCategory(skinCategory);
          <SkinPage key={skinCategory.id} {...skinCategory} />
          history.push('/skin-page')
          console.log(skinCategory);
        } else {
          console.log("Skin category not found");
        }
      } catch (error) {
        console.error('Error during get:', error);
      }
    }


    return(
        <div className= "flex justify-evenly space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <button onClick={handleMClick}>Makeup</button>
            <button onClick={handleSClick}>Skin Care</button>
            <button onClick={handleHClick}>Hair Care</button>
        </div>  
    )
}

export default Categories