import { useState } from 'react'
import './App.css'
import "./Color.css"
import "./ColorBox.css"

function App() {


  let [color,setColor]=useState("red")
     function handleColor(event){
        console.log(event.target.innerHTML)
        let newColor=event.target.innerHTML
        setColor(newColor)
    }
    function handleColorPicker(event){
      setColor(event.target.value)
    }
  return (
    <>
      <div className='frame' style={{backgroundColor:color}}>
        <h2 >Color Name : {color}</h2>
          <div className="colors">
            <button onClick={handleColor} style={{backgroundColor:'red'}}>Red</button>
            <button onClick={handleColor} style={{backgroundColor:"green"}}>Green</button>
            <button onClick={handleColor} style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={handleColor} style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={handleColor} style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={handleColor} style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={handleColor} style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={handleColor} style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={handleColor} style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={handleColor} style={{backgroundColor:"white", border:"1px solid black"}}>white</button>
            <button onClick={handleColor} style={{backgroundColor:"black",color:"white"}}>Black</button>
              <input type="color" onChange={handleColorPicker}/>
          </div>
      </div>
            
    </>
  )
}

export default App
