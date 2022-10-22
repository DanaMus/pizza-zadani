import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, index, onUpdateSelected }) => {
  return (
    <div className="topping">
      <Check
        initialChecked={topping.selected}
        onUpdateSelected={onUpdateSelected}
        index={index}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
