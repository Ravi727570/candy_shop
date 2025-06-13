import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ count, totalAmount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-wrapper">
      <button className="toggle-cart-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Cart' : `Cart (${count})`}
      </button>

      {isOpen && (
        <div className="cart-content">
          
          <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
