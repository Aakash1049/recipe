import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css"

const Home = ({detail, setDetail}) => {
    const [allRecipes, setAllrecipes] = useState([])
    const [serachResults, setSearchResults] = useState([])
    const [search, setSearch]=useState("")
    const navigate=useNavigate()
    useEffect(() => {
      
        fetch("/reciepe")
            .then(res => res.json())
            .then(data => {
                setAllrecipes(data.reciepe)
            })
    }, [])

    function detailHandler(recipe){
        setDetail(recipe)
        // navigate("/details")
        console.log("here22")
        navigate("/details")
        console.log("here24")

    }

    function searchHandler(e){
    //    setSearch(e.target.value)
        fetch(`/search/${e.toLowerCase() }`)
            .then(res => res.json())
            .then(data => {
                console.log(data.recipes, e, serachResults.length)
                setSearchResults(data.recipes)
            })
    }
    return (
        <div className='home' onClick={()=>{navigate("/home")}} >
            <div className='logo'>
                <i class="fa-solid fa-utensils"></i>  Recipe App
            </div>
            <input type="text" onChange={(e) => {setSearch(e.target.value) ;searchHandler(e.target.value) }} placeholder='search recipe by TITLE here' className='search' />
            <br />

            <div className='addnew'>
                <Link to="/add">
                    <i class="fa-solid fa-pizza-slice"></i>
                    <br></br>
                    <p>new</p>
                </Link>
            </div>
            <h2>All Recipes</h2>

            <div className='all'>

                {
                    search.length===0 &&
                    allRecipes.map((recipe) => {
                        return (
                            <div onClick={()=>detailHandler(recipe)} className='each'>
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

            <div className='all'>

                {
                    search.length!==0 &&
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
    )
}

export default Home