import React, { FC } from 'react'

interface ModalProps {
  children?: React.ReactNode
}

const Modal: FC<ModalProps> = ({children}: ModalProps) => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/50'>
      <div className='w-[400px] p-5 rounded bg-white absolute top-10  left-1/2 -translate-x-1/2'>
      <h1 className='text-center text-xl'>Add new product</h1>
      {children}
      </div>
    </div>
  )
}

export default Modal