import React from "react";
import GroceryItem from './GroceryItem.jsx';

const GroceryTable = ({ items, cart, addToCart }) => {
  return (
    <div className="table">
      <div className="table-headers">
        <div className="table-item">Name</div>
        <div className="table-item">Type</div>
        <div className="table-item">Price</div>
      </div>
      {items?.map( (item, idx) => {
        return <GroceryItem key={idx} item={item} cart={cart} addToCart={addToCart} />
      })}
    </div>
  );
};

export default GroceryTable;
