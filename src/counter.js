import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h2 className='text-purple-500 text-9xl'>Counter App</h2>
      <p className='text-5xl text-blue-500'>Current Count: {count}</p>
      <button className='text-lg text-red-500' onClick={countDown}>-</button>
      <button className='text-lg text-red-500' onClick={countUp}>+</button>
    </div>
  );
};

export default Counter;