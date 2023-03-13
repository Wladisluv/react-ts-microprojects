import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

  return (
    <div>
        <div className='mx-auto flex items-center justify-center font-bold text-9xl'>
            {count}
        </div>

        <div className='flex justify-between w-64 pt-8'>
            <button onClick={() => setCount(count + 1)} className='w-24 h-16 rounded text-2xl font-semibold bg-green-500 hover:bg-green-400 ease-in duration-100'>+PLUS</button>
            <button onClick={() => count !== 0 ? setCount(count - 1) : count} className='w-24 h-16 rounded text-2xl font-semibold bg-red-500 hover:bg-red-400 ease-in duration-100'>-MINUS</button>
        </div>

    </div>
  )
}

export default Counter