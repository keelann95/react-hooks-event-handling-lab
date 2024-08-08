// Code Keypad Component Here
import React, { useState } from 'react';

const Keypad = () => {
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Keypad;