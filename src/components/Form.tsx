import React, { useState } from 'react'

interface CreateProductProps {
  onCreate: () => void
}

const Form = ({onCreate}: CreateProductProps) => {

  const [value, setValue] = useState('')

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    onCreate()
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={value} onChange={changeHandler} placeholder='Enter product title' className='py-2 px-4'/>
      <button type='submit' className='py-2 px-4 mt-5 ml-5 rounded bg-green-500 text-white'>add product</button>
    </form>
  )
}

export default Form