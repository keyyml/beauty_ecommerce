import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get("/checkout");
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);
   
  const updateQuantity = async (productId, newQuantity) => {
    try {
      await axios.post(`/update_quantity/${productId}`, { quantity: newQuantity })
      const response = await axios.get("/checkout")
      setOrderDetails(response.data)
    } catch (error) {
      console.error("Error updating quantity:", error)
    }
  }

  const removeItem = async (productId) => {
    try {
      await axios.post(`/remove_item/${productId}`)
      const response = await axios.get("/checkout")
      setOrderDetails(response.data)
    } catch (error) {
      console.error("Error removing item:", error)
    }
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {orderDetails ? (
        <div>
          <p>Order ID: {orderDetails.order_id}</p>
          <p>Total Price: ${orderDetails.total_price.toFixed(2)}</p>
          <h3>Items:</h3>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.product.id}>
                {item.product.name} - ${(item.product.price.toFixed(2) * item.quantity).toFixed(2)} 
                <input
                  type="number"
                  id="quantity"
                  value={item.quantity}
                  className="border rounded py-1 px-2 text-gray-700"
                  onChange={(e) => updateQuantity(item.product.id, e.target.value)}
                />
                <button onClick={() => removeItem(item.product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading your cart...</p>
      )}
    </div>
  );
}

export default Cart;
