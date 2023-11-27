import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Categories(){

    const history = useHistory()

    const handleMClick = async () => {
      try {
        const response = await axios.get('/categories')
        const makeupCategory = response.data.find(category => category.name === "Makeup")
  
        if (makeupCategory) {
          history.push('/makeup-page')
        } else {
          console.log("Makeup category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
      }
    }

    const handleHClick = async () => {
      try {
        const response = await axios.get('/categories')
        const hairCategory = response.data.find(category => category.name === "Hair Care")
  
        if (hairCategory) {
          history.push('/hair-page')
        } else {
          console.log("hair category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
      }
    }

    const handleSClick = async () => {
      try {
        const response = await axios.get('/categories')
        const skinCategory = response.data.find(category => category.name === "Skin Care")
  
        if (skinCategory) {
          history.push('/skin-page')
        } else {
          console.log("Skin category not found")
        }
      } catch (error) {
        console.error('Error during get:', error)
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