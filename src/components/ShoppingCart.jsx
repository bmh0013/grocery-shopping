import React from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";

const ShoppingCart = ({ items }) => {
  return (
    <>
      <div className="table">
        <div className="table-headers">
          <div className="table-item header-name">Name</div>
          <div className="table-item header-price">Unit Price</div>
          <div className="table-item header-quantity">Quantity</div>
          <div className="table-item header-total">Total Price</div>
        </div>
        <div className="table-content">
          {items?.map((item, idx) => {
            return <ShoppingCartItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
