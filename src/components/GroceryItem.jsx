import React from "react";

const GroceryItem = ({ item, cart, setShoppingCart }) => {
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

    setShoppingCart(updateCart);
  };

  const removeItem = () => {
    const updateCart = { ...cart };

    if (updateCart[item.id]) {
      updateCart[item.id].quantity--;
      if (!updateCart[item.id].quantity) {
        delete updateCart[item.id];
      }
    }

    setShoppingCart(updateCart);
  };

  return (
    <div className="table-row">
      <div className="table-item name">{item.name}</div>
      <div className="table-item type">{item.type}</div>
      <div className="table-item price">${item.price.toFixed(2)}</div>
      <div className="buttons">
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  );
};

export default GroceryItem;
