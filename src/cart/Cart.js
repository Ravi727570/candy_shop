import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ count }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-wrapper">
      <button className="toggle-cart-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Cart' : `Cart (${count})`}
      </button>

      {isOpen && (
        <div className="cart-content">
          <h3>Total Items in Cart: {count}</h3>
          {/* You can show more detail here later */}
        </div>
      )}
    </div>
  );
};

export default Cart;
