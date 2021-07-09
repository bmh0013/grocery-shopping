import React from "react";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="table-row">
      <div className="table-item">{item.name}</div>
      <div className="table-item">${item.price.toFixed(2)}</div>
      <div className="table-item">{item.quantity}</div>
      <div className="table-item">${ (item.quantity * item.price).toFixed(2) }</div>
    </div>
  );
};

export default ShoppingCartItem;
