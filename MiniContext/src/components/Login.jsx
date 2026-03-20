import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName,setUserName] = useState("")
    const [pass,setPass] = useState("")

    const {setUser}=useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({userName,pass})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="text" placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
