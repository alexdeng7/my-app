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
        <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className='font-bold text-purple-500 text-9xl'>Counter App</h2>
            <div style={{ margin: '20px' }}></div>
            <p className='text-5xl font-medium text-blue-500'>Current Count: {count}</p>
            <div style={{ margin: '20px' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                <div style={{ borderRadius: '10px', backgroundColor: 'yellow', padding: '20px' }}>
                    <button className='font-mono text-3xl text-red-500' onClick={countDown}>-</button>
                </div>
                <div style={{ borderRadius: '10px', backgroundColor: 'yellow', padding: '20px' }}>
                    <button className='font-mono text-3xl text-green-500' onClick={countUp}>+</button>
                </div>
            </div>
        </div>

    );
};

export default Counter;