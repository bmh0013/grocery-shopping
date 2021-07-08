import React, { useState, useEffect } from "react";
const axios = require('axios');

const App = () => {
  const [groceryItems, setGroceryItems] = useState();

  useEffect( () => {
    console.log(groceryItems);
  }, [groceryItems] )

  useEffect( () => {
    axios.get("https://muigrocery.free.beeceptor.com/groceries")
    .then( res => {
      setGroceryItems( res.data.products );
    })
    .catch( err => {
      console.log( err );
    });
  }, [] )

  return (
    <div>
      Hello World!
    </div>
  )
};

export default App;
