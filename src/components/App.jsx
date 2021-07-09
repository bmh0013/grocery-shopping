import React, { useState, useEffect } from "react";
const axios = require('axios');
import GroceryTable from "./GroceryTable.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import SearchBar from "./SearchBar.jsx";

import data from "../data.js";

const App = () => {
  const [groceryItems, setGroceryItems] = useState(data);
  const [filteredResults, setFilteredResults] = useState(groceryItems);
  const [shoppingCart, setShoppingCart] = useState({});

  // useEffect( () => {
  //   axios.get("https://muigrocery.free.beeceptor.com/groceries")
  //   .then( res => {
  //     console.log( res.data.products )
  //     setGroceryItems( res.data.products );
  //   })
  //   .catch( err => {
  //     console.log( err );
  //   });
  // }, [] )

  const filterItems = (string) => {
    const filteredItems = [];
    string = string.toLowerCase();

    for (let i = 0; i < groceryItems.length; i++) {
      const item = groceryItems[i];

      if ( item.name.toLowerCase().includes(string) ) {
        filteredItems.push(item);
      } else if ( item.type.toLowerCase().includes(string) ) {
        filteredItems.push(item);
      }
    };

    return setFilteredResults(filteredItems);
  };

  return (
    <div>
      <div className="section">
        <h3>Grocery Items</h3>
        <SearchBar handleSearch={filterItems} />
        <GroceryTable items={filteredResults} cart={shoppingCart} addToCart={setShoppingCart} />
      </div>
      <div className="section">
        <h3>Shopping Cart</h3>
        <ShoppingCart items={shoppingCart} />
      </div>
    </div>
  )
};

export default App;
