import React, { useState, useEffect } from "react";
const axios = require("axios");
import GroceryTable from "./GroceryTable.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterType from "./FilterType.jsx";

import products from "../products.js";

const App = () => {
  const [groceryItems, setGroceryItems] = useState(products);
  const [filteredResults, setFilteredResults] = useState(groceryItems);
  const [shoppingCart, setShoppingCart] = useState({});
  const [typeSelection, setTypeSelection] = useState("All Types");

  // ### DATA SAVED IN data.js ###
  // useEffect(() => {
  //   axios
  //     .get("https://muigrocery.free.beeceptor.com/groceries")
  //     .then((res) => {
  //       setGroceryItems(res.data.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // Gathers the list of all food types for the type filter
  const allTypes = ["All Types"];
  for (const item of groceryItems) {
    if (allTypes.includes(item.type)) {
      continue;
    } else {
      allTypes.push(item.type);
    }
  }

  // Will update the filteredResults array once GET request returns products or the type selection is changed
  useEffect(() => {
    const query = document.querySelector("#search-bar").value.toLowerCase();
    filterItems(query);
  }, [typeSelection, groceryItems]);

  const filterItems = (string) => {
    const filteredItems = [];

    if (typeSelection === "All Types") {
      for (const item of groceryItems) {
        if (item.name.toLowerCase().includes(string)) {
          filteredItems.push(item);
        }
      }
    } else {
      for (const item of groceryItems) {
        if (
          item.type === typeSelection &&
          item.name.toLowerCase().includes(string)
        ) {
          filteredItems.push(item);
        }
      }
    }

    return setFilteredResults(filteredItems);
  };

  const selection = (
    <select
      name="types"
      id="filter-types"
      onChange={(e) => setTypeSelection(e.target.value)}
    >
      {allTypes.map((type, idx) => {
        return (
          <option name="types" value={type} key={idx}>
            {type}
          </option>
        );
      })}
    </select>
  );

  return (
    <div>
      <div className="grocery-items-section">
        <h3>Grocery Items</h3>

        <div className="filters">
          {selection}
          <SearchBar handleSearch={filterItems} />
        </div>

        <GroceryTable
          items={filteredResults}
          cart={shoppingCart}
          addToCart={setShoppingCart}
        />
      </div>

      <div className="shopping-cart-section">
        <h3>Shopping Cart</h3>
        <ShoppingCart items={shoppingCart} />
      </div>
    </div>
  );
};

export default App;
