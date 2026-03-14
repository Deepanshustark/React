import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count,setCount]=useState(0)

  function increase(){
    setCount(count+1)
  }
  function decrease(){
    if(count>0){
      setCount(count-1)
    }
  }
  return(
    <>
      <h1>Counter App</h1>
      <h3>Counter Value : {count}</h3>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  )
}

export default App
