import React from "react";

const GroceryItem = ({ item, cart, addToCart }) => {
  const addItem = () => {
    const updateCart = { ...cart };

    if (updateCart[item.id]) {
      updateCart[item.id].quantity++;
    } else {
      updateCart[item.id] = {
        name: item.name,
        type: item.type,
        price: item.price,
        quantity: 1,
      };
    }

    addToCart(updateCart)
  };

  const removeItem = () => {
    const updateCart = { ...cart };

    if ( updateCart[item.id] ) {
      updateCart[item.id].quantity--;
      if ( !updateCart[item.id].quantity ) {
        delete updateCart[item.id];
      }
    }

    addToCart(updateCart)
  };

  return (
    <div className="table-row">
      <div className="table-item">{item.name}</div>
      <div className="table-item">{item.type}</div>
      <div className="table-item">${item.price.toFixed(2)}</div>
      <div className="item-button">
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  );
};

export default GroceryItem;
