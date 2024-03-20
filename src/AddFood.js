import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddFood = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1); // กำหนดค่าเริ่มต้นของจำนวนเมนูที่เพิ่มเป็น 1

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) return;
    const newFood = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity) // แปลงค่าจำนวนเป็นชนิดข้อมูลจำนวนเต็ม
    };
    onAdd(newFood);
    setName('');
    setPrice('');
    setQuantity(1); // เซ็ตค่าเริ่มต้นใหม่เมื่อเพิ่มเมนูเสร็จ
  };

  return (
    <div className="container">
      <h2>เพิ่มอาหาร</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="ชื่ออาหาร"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="ราคา"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="จำนวน"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">เพิ่ม</button>
      </form>
    </div>
  );
};

export default AddFood;
