import { use, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import "./Style.css"

function App() {
  let [length,setLength]=useState(6)
  let [numberAllowed,setNumberAllowed]=useState(false)
  let [characterAllowed,setCharacterAllowed]=useState(false)
  let [password,setPassword]=useState("sdFdYm")
  const passwordRef=useRef(null)




  let passwordGenerator=useCallback((length)=>{
     let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) chars+="0123456789"
     if(characterAllowed) chars+="@#$%&*!?"
     let result=""
      for(let i=0;i<length;i++){
        let index=Math.floor(Math.random()*chars.length)
        result=result+chars[index]
      }
      console.log(result)
      setPassword(result)



  },[length,numberAllowed,characterAllowed,setPassword])


  
   function handleLength(event){
    let newLength=event.target.value
    setLength(newLength)
 
  }
  function copytoClipBoard(){
    passwordRef.current.focus()
    passwordRef.current.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(passwordRef.current.value)
  }

  useEffect(()=>{
    passwordGenerator(length)
  },[length,numberAllowed,characterAllowed,passwordGenerator])


  return (
    <>
      <h1>Password Generator</h1>
      <span>
        <input type="text" value={password} ref={passwordRef}/>
        <button onClick={copytoClipBoard}>Copy</button>
      </span>
      <div className='values'>
         <input type="range" min="6" max="15" onChange={handleLength} />
        <p>Length({length})</p>
        <input type="checkbox" id="number" onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="number">Numbers</label>
        <input type="checkbox" id="character" onChange={()=>{
          setCharacterAllowed((prev)=>!prev)
        }}/>
        <label htmlFor="character">Character</label>
      </div>
     
    </>
  )
}

export default App
