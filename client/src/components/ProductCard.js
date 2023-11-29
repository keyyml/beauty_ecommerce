import React, { useState } from "react";
import axios from "axios";

function ProductCard({ id, name, price, image, brand }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToOrder, setAddedToOrder] = useState(false);

  const addToOrder = async () => {
    try {
      await axios.post(`/add_to_order/${id}`);
      setAddedToOrder(true);
    } catch (error) {
      console.error("Error adding product to order:", error);
    }
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white px-6 py-4">
    <img className="w-full" src="https://i.ibb.co/3v4GWST/blush.jpg" alt={name} />
    <div className="">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{brand}</p>
      <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
      {addedToOrder ? (
        <p className="text-green-500">Added to Order!</p>
      ) : (
        <div className="flex items-end">
          <button
            onClick={addToOrder}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg rounded ml-2"
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

