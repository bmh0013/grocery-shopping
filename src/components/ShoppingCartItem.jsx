import React from "react";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="table-row">
      <div className="table-item name">{item.name}</div>
      <div className="table-item price">${item.price.toFixed(2)}</div>
      <div className="table-item quantity">{item.quantity}</div>
      <div className="table-item total">${ (item.quantity * item.price).toFixed(2) }</div>
    </div>
  );
};

export default ShoppingCartItem;
