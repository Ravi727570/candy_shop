import React, { useState } from 'react';
import './Head.css';

const Head = ({ onAdd, candies, onBuy }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !text || !price) return;
    onAdd({ name, description: text, price: parseFloat(price) });
    setName('');
    setText('');
    setPrice('');
  };

  return (
    <div className="head">
      <h2>Candy Shop</h2>
      <div className="datas">
  <div className="form-group">
    <label>Candy Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  </div>
  <div className="form-group">
    <label>Price</label>
    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
  </div>
  <button className="btn" onClick={handleAdd}>Add</button>
</div>

<br></br>
<hr></hr>
      <ul className="candy-list">
        {candies.map(candy => (
          
          <li key={candy.id}>
            <div className="saveDatas">
            <strong>{candy.name}</strong>   {candy.description}   {candy.price}
              <button className="btn1" onClick={() => onBuy(candy.id, 1)}>Buy One</button>
              <button className="btn1" onClick={() => onBuy(candy.id, 2)}>Buy Two</button>
              <button className="btn1" onClick={() => onBuy(candy.id, 3)}>Buy Three</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Head;
