import React, { useState, useEffect } from "react";
const axios = require("axios");
import GroceryTable from "./GroceryTable.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import SearchBar from "./SearchBar.jsx";

import products from "../products.js";

const App = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState(groceryItems);
  const [shoppingCart, setShoppingCart] = useState({});
  const [typeSelection, setTypeSelection] = useState("All Types");
  const [allTypes, setAllTypes] = useState(["All Types"]);
  const [modal, setModal] = useState(false);

  // Simiulate async get products since there is a limit for requests per day
  // useEffect(() => {
  //   setTimeout(setGroceryItems(products), 1000);
  //   const types = ["All Types"];
  //   for (const item of products) {
  //     if (types.includes(item.type)) {
  //       continue;
  //     } else {
  //       types.push(item.type);
  //     }
  //   }
  //   setAllTypes(types);
  // }, []);

  // ### Data saved in products.js ###
  useEffect(() => {
    axios
      .get("https://muigrocery.free.beeceptor.com/groceries")
      .then((res) => {
        setGroceryItems(res.data.products);

        // Gathers the list of all food types  for the select filter
        const types = ["All Types"];
        for (const item of res.data.products) {
          if (types.includes(item.type)) {
            continue;
          } else {
            types.push(item.type);
          }
        }
        setAllTypes(types);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Will update the tables when the type selection is changed or GET request returns with data
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
        if ( item.type === typeSelection && item.name.toLowerCase().includes(string) ) {
          filteredItems.push(item);
        }
      }
    }

    return setFilteredResults(filteredItems);
  };

  const selection = (
    <select name="types" id="filter-types" onChange={(e) => setTypeSelection(e.target.value)} >
      {allTypes.map((type, idx) => {
        return (
          <option name="types" value={type} key={idx}>
            {type}
          </option>
        );
      })}
    </select>
  );

  const grandTotal = Object.values(shoppingCart).reduce((accu, item) => {
    accu += item.price * item.quantity;
    return accu;
  }, 0);

  return (
    <div>
      <div className="banner">
        <figure>
          <img src={require("../../public/assets/grocery-store-logo.jpeg")} className='logo'></img>
        </figure>
      </div>
      <div className="filters">
        {selection}
        <SearchBar handleSearch={filterItems} />
      </div>

      <div className="main">
        <div className="grocery-items-section">
          <GroceryTable items={filteredResults} cart={shoppingCart} setShoppingCart={setShoppingCart} />
        </div>

        <div className="shopping-cart-section">
          <ShoppingCart items={Object.values(shoppingCart)} grandTotal={grandTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
