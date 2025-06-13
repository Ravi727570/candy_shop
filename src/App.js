import React, { useState } from 'react';
import Head from './head/Head';
import Cart from './cart/Cart';

function App() {
  const [candies, setCandies] = useState([]);
  const [cartCount, setCartCount] = useState(0); // total items bought

  const addCandy = (newCandy) => {
    setCandies(prev => [...prev, { ...newCandy, id: Date.now(), quantity: 10 }]);
  };

  const handleBuy = (id, qty) => {
    setCandies(prev =>
      prev.map(candy =>
        candy.id === id && candy.quantity >= qty
          ? { ...candy, quantity: candy.quantity - qty }
          : candy
      )
    );
    setCartCount(prev => prev + qty);
  };

  return (
    <div className="App">
      <Cart count={cartCount} />
      <Head candies={candies} onAdd={addCandy} onBuy={handleBuy} />
    </div>
  );
}

export default App;
