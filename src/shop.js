import React, { useState } from "react";
import Products from "./product";
import Cart from "./cart";
import OrderSummary from "./orderSummary";
import product1 from "../public/iphone-11-pro-green.png";
import product2 from "../public/iphone-11-pro-grey.png";
import product3 from "../public/iphone-11-pro-green.png";
import product4 from "../public/iphone-11-pro-silver.png";

const Shop = () => {
  const [products] = useState([
    {
      name: "Iphone 11 Pro (Silver)",
      price: "999",
      storage: "64gb",
      image: product1
    },
    {
      name: "Iphone 11 Pro (Grey)",
      price: "1199",
      storage: "128gb",
      image: product2
    },
    {
      name: "Iphone 11 Pro (M Green)",
      price: "1399",
      storage: "256gb",
      image: product3
    },
    {
      name: "Iphone 11 Pro (White)",
      price: "1599",
      storage: "512gb",
      image: product4
    }
  ]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.name === product.name);
    if (itemIndex === -1) {
      setCart([
        ...cart,
        {
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
        }
      ]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (cart[itemIndex].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity--;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
    }
  };
  const clearFromCart = () => {
    setOrder(cart);
    if (cart.length) {
      setCart([]);
      setShowOrderSummary(true);
    }
  };

  return (
    <div className="shop">
      <Products products={products} onAddToCart={addToCart} />
      <Cart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onOrder={clearFromCart}
      />
      {/* <button onClick={() => clearFromCart(cart)}>Place Order</button>
      <br/> */}
      <button onClick={() => clearFromCart()}>Place Order</button>
      {showOrderSummary && <OrderSummary cart={order} />}
    </div>
  );
};

export default Shop;
