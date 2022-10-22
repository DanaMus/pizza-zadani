import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [actualToppings, setActualToppings] = useState(toppings);

  const handleUpdateSelected = (index, checked) => {
    const newToppings = [...actualToppings];
    newToppings[index].selected = checked;
    setActualToppings(newToppings);
  };

  let productCount = 0;

  actualToppings
    .filter((topping) => topping.selected)
    .forEach((topping) => (productCount += topping.price));

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: {productCount.toFixed(2)} Euro</p>

      <div className="toppings">
        {actualToppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={index}
            index={index}
            onUpdateSelected={handleUpdateSelected}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
