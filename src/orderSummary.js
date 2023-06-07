import React from "react";
import "./orderSummary.css";

const OrderSummary = ({ cart }) => {
  const calculateTotalItems = () => {
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <div className="item">
          <img className="image" src={item.image} alt={item.name} />
          <div className="details">
            <p>{item.name}</p>
            <p>
              {item.quantity} x ${item.price}
            </p>
          </div>
        </div>
      ))}
      <hr />
      <div className="total">
        <p>Total Items: {calculateTotalItems()}</p>
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
