import React from "react";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="cart-row">
      <div className="cart-item name">{item.name}</div>
      <div className="cart-item price">${item.price.toFixed(2)}</div>
      <div className="cart-item quantity">{item.quantity}</div>
      <div className="cart-item total">${ (item.quantity * item.price).toFixed(2) }</div>
    </div>
  );
};

export default ShoppingCartItem;
