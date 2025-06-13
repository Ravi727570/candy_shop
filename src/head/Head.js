import React, { useState } from 'react';
import './Head.css';

const Head = ({ onAdd, candies, onBuy }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !text || !price) return;
    onAdd({ name, description: text, price: parseFloat(price)});
    setName('');
    setText('');
    setPrice('');
  };

  return (
    <div className="head">
      <div className="datas">
        <label>
          Candy Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          Price
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>

      <ul className="candy-list">
        {candies.map(candy => (
          <li key={candy.id}>
            <strong>{candy.name}</strong> - {candy.description} - ₹{candy.price}
            <div className="saveDatas">
              <button className="btn1" disabled={candy.quantity < 1} onClick={() => onBuy(candy.id, 1)}>Buy One</button>
              <button className="btn1" disabled={candy.quantity < 2} onClick={() => onBuy(candy.id, 2)}>Buy Two</button>
              <button className="btn1" disabled={candy.quantity < 3} onClick={() => onBuy(candy.id, 3)}>Buy Three</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Head;
