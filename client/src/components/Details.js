import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css"
import "./Details.css"

const Details = ({ detail }) => {
    const [showInstruction, setShowInstruction] = useState(true)
    const [showIngredients, setShowIngredients] = useState(false)
    const [serachResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("")
    const navigate=useNavigate()
    let ingredients = detail.ingredients.split(",")
    function searchHandler(e) {
        //    setSearch(e.target.value)
        fetch(`/search/${e.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.recipes, e, serachResults.length)
                setSearchResults(data.recipes)
            })
    }
    return (
        <div>


            <div className='home'>
                <div className='logo' onClick={()=>{navigate("/home")}}>
                    <i class="fa-solid fa-utensils"></i>  Recipe App
                </div>
                <input type="text" onChange={(e) => { setSearch(e.target.value); searchHandler(e.target.value) }} placeholder='search recipe by TITLE here' className='search' />
                <br />

                <div className='addnew'>
                    <Link to="/add">
                        <i class="fa-solid fa-pizza-slice"></i>
                        <br></br>
                        <p>new</p>
                    </Link>
                </div>
                <div className='all'>

                    {
                        search.length !== 0 &&
                        serachResults.map((recipe) => {
                            return (
                                <div className='each'>
                                    <img src={recipe.image} />

                                    <span className='info'>
                                        Recipe: {recipe.title}
                                        <br></br>
                                        Posted By: {recipe.author}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>






           { search.length===0 && <div className='detail'>
                <div className='col1'>
                    <h2>{detail.title}</h2>
                    <img src={detail.image} />
                </div>
                <div className='col2'>
                    <button onClick={() => { setShowInstruction(true); setShowIngredients(false) }}>Instructions</button>
                    <br></br>
                    <button onClick={() => { setShowInstruction(false); setShowIngredients(true) }}>Ingredients</button>
                    <br></br>
                    {
                        showInstruction ?
                            <>
                                {detail.instructions}
                            </>
                            :
                            <ul>
                                {ingredients.map((ingredient) => {
                                    return <>
                                        <li>{ingredient}</li>
                                    </>
                                })
                                }
                            </ul>
                    }
                </div>
            </div>}
        </div>
    )
}

export default Details