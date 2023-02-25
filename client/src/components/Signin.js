import React, { useState } from 'react'

const Signin = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function signInhandler(e){
        e.preventDefault()
        fetch("/signin",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

  return (
    <div>
        <form>
        <label>Email:</label> 
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label>Password:</label> 
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={(e)=>signInhandler(e)}>Submit</button>
        </form>

    </div>
  )
}

export default Signin