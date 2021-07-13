import React from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";

const ShoppingCart = ({ items }) => {
  const grandTotal = items.reduce((accu, item) => {
    accu += item.price * item.quantity;
    return accu;
  }, 0);

  return (
    <div className="paper">
      <div className="cart">
        <div className="cart-headers">
          <div className="cart-item header-name">Name</div>
          <div className="cart-item header-price">Price</div>
          <div className="cart-item header-quantity">Quantity</div>
          <div className="cart-item header-total">Total</div>
        </div>
        <div className="cart-content">
          {items?.map((item, idx) => {
            return <ShoppingCartItem key={idx} item={item} />;
          })}
        </div>
      </div>
      <div className="cart-footer">
        <span>Shopping Cart - ( ${grandTotal.toFixed(2)} )</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
