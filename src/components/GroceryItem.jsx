import React from "react";

const GroceryItem = ({ item }) => {
  return (
    <div className="table-row">
      <div className="table-item">{item.name}</div>
      <div className="table-item">{item.category}</div>
      <div className="table-item">${item.price.toFixed(2)}</div>
      <div className="item-button">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default GroceryItem;
