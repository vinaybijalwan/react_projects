import React, { useState } from 'react'

export const CounterApp = () => {

    const [count, setCount] = useState(0)


  return (
    <div>
        <div className="main">
            <h1>This is My Counter App</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count +1)}>Click Me</button>
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>

    </div>
  )
}
