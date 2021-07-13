import React from "react";
import GroceryItem from './GroceryItem.jsx';

const GroceryTable = ({ items, cart, addToCart }) => {
  return (
    <div className="table">
      <div className="table-headers">
        <div className="table-item header-name">Name</div>
        <div className="table-item header-type">Type</div>
        <div className="table-item header-price">Price</div>
      </div>
      <div className="table-content">
        {items?.map( (item, idx) => {
          return <GroceryItem key={idx} item={item} cart={cart} addToCart={addToCart} />
        })}
      </div>
    </div>
  );
};

export default GroceryTable;
