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
   
  console.log(orderDetails)

  return (
    <div>
      <h2>Your Cart</h2>
      {orderDetails ? (
        <div>
          <p>Order ID: {orderDetails.order_id}</p>
          <p>Total Price: ${orderDetails.total_price}</p>
          <h3>Items:</h3>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.product.id}>
                {item.product.name} - ${(item.product.price * item.quantity).toFixed(2)} (Quantity: {item.quantity})
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
