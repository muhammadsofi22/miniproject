import React, { useState } from 'react';
import FoodList from './FoodList';
import AddFood from './AddFood';

const App = () => {
  const [foods, setFoods] = useState([]);
  const [confirmedMenu, setConfirmedMenu] = useState([]);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleDeleteFood = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  };

  const handleConfirmMenu = () => {
    setConfirmedMenu(foods);
    setFoods([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">ระบบสั่งอาหาร</h1>
      <AddFood onAdd={handleAddFood} />
      <FoodList foods={foods} onDelete={handleDeleteFood} onConfirm={handleConfirmMenu} />
      <h2 className="mt-5">เมนูที่ยืนยันแล้ว</h2>
      <ul className="list-group">
        {confirmedMenu.map((food, index) => (
          <li key={index} className="list-group-item">
            {food.name} - {food.price} บาท
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
