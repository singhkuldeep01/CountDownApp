import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDown from './Components/CountDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountDown />
    </>
  )
}

export default App
