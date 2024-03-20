import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodList = ({ foods, onDelete, onConfirm }) => {
  // นับจำนวนเมนูทั้งหมด
  const totalItems = foods.length;

  return (
    <div className="container">
      <h2>รายการอาหาร</h2>
      <p>จำนวนเมนู: {totalItems}</p> {/* แสดงจำนวนเมนู */}
      <ul className="list-group">
        {foods.map((food, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {food.name} - {food.price} บาท
            <button onClick={() => onDelete(index)} className="btn btn-danger">ลบ</button>
          </li>
        ))}
      </ul>
      <button onClick={onConfirm} className="btn btn-primary mt-3">ยืนยันเมนู</button>
    </div>
  );
};

export default FoodList;
