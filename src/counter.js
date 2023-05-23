import React, { useState, useEffect } from "react";

const Counter = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue);

  useEffect(() => {
    if (count > 9) {
      setCount(0);
    }
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <h2 className="font-bold text-purple-500 text-9xl">Counter App</h2>
      <div className="my-8"></div>
      <p className="text-5xl font-medium text-blue-500">
        Current Count: {count}
      </p>
      <div className="my-8"></div>
      <div className="flex justify-between w-52">
        <div className="p-4 bg-yellow-300 border border-orange-400 rounded-lg">
          <button className="text-3xl text-red-500" onClick={countDown}>
            -
          </button>
        </div>
        <div className="p-4 bg-yellow-300 border border-orange-400 rounded-lg">
          <button className="text-3xl text-green-500" onClick={countUp}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
