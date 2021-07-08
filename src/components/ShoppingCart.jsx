import React from "react";
import ShoppingCartItem from './ShoppingCartItem.jsx';

const ShoppingCart = ({ items }) => {
  let totalPrice = items.reduce( (accu, item) => {
    return item.price * 4;
  }, 0);

  return (
    <>
      <div className="table">
        <div className="table-headers">
          <div className="table-item">Name</div>
          <div className="table-item">Unit Price</div>
          <div className="table-item">Quantity</div>
          <div className="table-item">Total Price</div>
        </div>
        {items?.map( (item, idx) => {
          return <ShoppingCartItem key={idx} item={item} />
        })}
      </div>
      <div className="grand-total">
        Grand Total: {totalPrice.toFixed(2)}
      </div>
    </>
  );
};

export default ShoppingCart;
