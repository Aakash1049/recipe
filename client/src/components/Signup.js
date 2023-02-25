import React, { useState } from 'react'

const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setconfirmPassword]=useState("")
    const [terms,setTerms]=useState(false)

    function signUphandler(e){
        e.preventDefault()
        if(email==="" || password==="" || confirmPassword===""){
            return alert("please fill all details")
        }
        if(terms===false){
            return alert("please accept terms and condition")
        }
        fetch("/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email,password,confirmPassword
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
        <label>Confirm Password:</label> 
        <input type="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
        <input type="checkbox" id='terms' value={terms} onChange={()=>setTerms(!terms)}/>
        <label for="terms">I agree with terms and conditions</label> 
        <button onClick={(e)=>signUphandler(e)}>Submit</button>
        </form>

    </div>
  )
}

export default SignUp