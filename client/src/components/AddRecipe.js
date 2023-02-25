import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddRecipe.css"

const AddRecipe = () => {
    const [title, setTitle]=useState("")
    const [author, setAuthor]=useState("")
    const [image, setImage]=useState("")
    const [ingredients, setIngredients]=useState("")
    const [instructions, setInstructions]=useState("")
    const navigate=useNavigate()

    function SubmitHandler(e){
        e.preventDefault()
        fetch("/create",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title:title.toLowerCase(), author, image, ingredients, instructions
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message)
            navigate("/home")
        })
    }

  return (
    <div className='AddRecipe'>
        <div className='content'>

        <h2>Create a recipe</h2>

        <p> Share a recipe with the club by completing the form below</p>
        <br></br>
        <label>Recipe Title:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br></br>
        <label>Author: </label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <br></br>
        <label>Please Upload your Image or paste URL link:</label>

        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
        <br></br>
        <label>Ingredients:</label>
        <textarea className='largeInput' value={ingredients} onChange={(e)=>setIngredients(e.target.value)} placeholder='Please add comma separated values. e.g. sugar, water, tea, milk'/>
        <br></br>
        <label>Recipe Directions:</label>
        <textarea className='largeInput' value={instructions} onChange={(e)=>setInstructions(e.target.value)} />
        <br></br>
        <button onClick={(e)=>SubmitHandler(e)}>Submit</button>
        </div>
    </div>
  )
}

export default AddRecipe