import { useEffect, useState } from 'react'
// import './App.css'
import "./hooks/useCurrencyinfo"
import useCurrencyinfo from './hooks/useCurrencyinfo'
import Input from './Input'


function App() {
    const [amount,setAmount]= useState(0)
    const {response,convertedAmount} = useCurrencyinfo(1,"USD","INR")
    const options= Object.keys(response)
    console.log(`value of options = ${options}`)
    setAmount(value)
  
  
  return (
    <>
      <h1>Currency Convertor</h1>
      <Input toAndfrom="From"  selector={options}/>
    
      <Input toAndfrom="to" selector={options} value={data}/>
      <br></br><br></br><br></br>
      <button>Convert</button>444
      
    </>
  )
}

export default App
