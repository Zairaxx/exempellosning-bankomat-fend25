import { useState } from 'react'
import './App.css'
import ATM from './components/ATM'

function App() {

  const [show, setShow] = useState(false);

  const toggleATM = () => {
    setShow(!show);
  }

  return (
    <>
      <button onClick={toggleATM}>Toggle</button>
      {show && <ATM/>}
    </>
  )
}

export default App
