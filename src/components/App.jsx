import React, { useState, useEffect } from "react";
const axios = require('axios');
import Table from "./GroceryTable.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import SearchBar from "./SearchBar.jsx";

import data from "../mockdata.js";

const App = () => {
  const [groceryItems, setGroceryItems] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([{
    id: 1,
    name: "Bananas",
    category: "fruit",
    price: 1.23
  }]);

  // useEffect( () => {
  //   console.log(groceryItems);
  // }, [] )

  // useEffect( () => {
  //   axios.get("https://muigrocery.free.beeceptor.com/groceries")
  //   .then( res => {
  //     setGroceryItems( res.data.products );
  //   })
  //   .catch( err => {
  //     console.log( err );
  //   });
  // }, [] )

  return (
    <div>
      <div className="section">
        <h3>Grocery Items</h3>
        <SearchBar />
        <Table items={groceryItems} />
      </div>
      <div className="section">
        <h3>Shopping Cart</h3>
        <ShoppingCart items={shoppingCart} />
      </div>
    </div>
  )
};

export default App;
