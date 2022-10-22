import React, { useState } from 'react';
import './style.css';

const Check = ({ initialChecked, onUpdateSelected, index }) => {
  // const [checked, setChecked] = useState(initialChecked);

  const handleClick = () => {
    onUpdateSelected(index, !initialChecked);
  };

  return (
    <button className="check" onClick={handleClick}>
      {initialChecked ? '✓' : ''}
    </button>
  );
};

export default Check;
