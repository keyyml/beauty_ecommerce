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
    <div>
      <img alt="product img" title={brand} width="200" height="100" />
      <h3>{name}</h3>
      <h4>{brand}</h4>
      <p>${price.toFixed(2)}</p>
      {addedToOrder ? (
        <p>Added to Order!</p>
      ) : (
        <div>
          <button className="bg-gray-600"onClick={addToOrder}>Add to Order</button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
          />
        </div>
      )}
    </div>
  );
}

export default ProductCard;

