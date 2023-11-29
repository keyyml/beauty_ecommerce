import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProductPage from "./ProductPage";

function ProductCard({ id, name, price, image, brand, updateCart}) {
  const [quantity, setQuantity] = useState(1);
  const [addedToOrder, setAddedToOrder] = useState(false);
  const [prodToRender, setProdToRender] = useState({})

  const history = useHistory()

  const addToOrder = async () => {
    try {
      await axios.post(`/add_to_order/${id}`, { quantity: quantity })
      setAddedToOrder(true)
      updateCart(id, quantity)
    } catch (error) {
      console.error("Error adding product to order:", error)
    }
  }

  const renderProdPage = async () => {
    try {
      const response = await axios.get(`/products/${id}`)
      const prodToRender = response.data[0]
      setProdToRender(prodToRender)

      history.push({
        pathname: "/product-page",
        state: { prodToRender },
      });
    } catch (error) {
      console.error("Error with get product by id", error)
    }
  }

  return (
    <div className="  hover:bg-gray-200 max-w-xs rounded overflow-hidden shadow-lg bg-white px-6 py-4">
    <img onClick={renderProdPage} className="w-full" src="https://i.ibb.co/3v4GWST/blush.jpg" alt={name} />
    <div className="">
      <div onClick={renderProdPage} className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{brand}</p>
      <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
      {addedToOrder ? (
        <p className="text-green-500">Added to Order!</p>
      ) : (
        <div className="flex flex-col justify-center mt-4">
          <button
            onClick={addToOrder}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg rounded ml-2 "
          >
            Add to Order
          </button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            className="border rounded py-1 px-2 text-gray-700"
          />
        </div>
      )}
    </div>
  </div>
);
}

export default ProductCard;

