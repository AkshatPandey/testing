import React from "react";
import "./cart.css";

const Cart = ({ cart, onRemoveFromCart, onOrder }) => {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="item">
        {cart.map((item, index) => (
          <div className="item">
            <img className="a" src={item.image} alt={item.name} />
            <div className="detail">
              <span>
                {item.name} <br />
                Price:{item.price}
                <br />
                Quatity:{item.quantity}
              </span>
              <br />
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${cartTotal}</p>
    </div>
  );
};

export default Cart;
