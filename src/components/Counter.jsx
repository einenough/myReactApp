import React, { useState } from 'react';
const Counter = () =>{
    const[count,setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}