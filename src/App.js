import React, { useState } from 'react';
import Head from './head/Head';
import Cart from './cart/Cart';
import "./App.css";


function App() {
  const [candies, setCandies] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addCandy = (newCandy) => {
    setCandies(prev => [...prev, { ...newCandy, id: Date.now() }]);
  };

  // Removed qty, fixed to increment by 1
  const handleBuy = (id, qty) => {
  const candy = candies.find((c) => c.id === id);
  if (candy) {
    setCartCount((prev) => prev + qty);
    setTotalAmount((prev) => prev + qty * candy.price);
  }
};


  return (
    <div className="App">
      <Cart count={cartCount} totalAmount={totalAmount} />
      <Head candies={candies} onAdd={addCandy} onBuy={handleBuy} />
    </div>
  );
}

export default App;
