import React, { useState } from 'react'
import Form from './components/Form'
import Modal from './components/Modal'

const App = () => {

  const [modal, setModal] = useState(false)

  return (
    <div className='h-screen bg-slate-500'>
      <div className='flex justify-center items-center h-screen'>
      <button className='py-2 px-4 rounded text-xl bg-slate-700 text-white' onClick={() => setModal(true)}>Open⚡️</button>
    </div>
      {modal && 
      <Modal>
        <Form onCreate={() => setModal(false)}/>
      </Modal>
      }
    </div>
  )
}

export default App