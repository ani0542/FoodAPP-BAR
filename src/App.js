import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import './App.css'
import Axios from 'axios'
function App() {

  const [search,setSearch] = useState('')
  const [recipe,setRecipe] = useState([])


    const APP_ID='3238c678';
    const APP_KEY='406d026e8c7a2a1dba579befeded2666678';


  

  const getRecipes = async()=>{
    const response = await Axios.get( `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
       
    console.log(response)

    console.log(response.length<1)

    setRecipe(response.data.hits)
  }


  useEffect( async()=>{
    
  
    
      getRecipes()
    
     
    // 
    
    
    
  },[])



  const onInputChange=(e)=>{
    // console.log(e.target.value)
    setSearch(e.target.value)
  }


  const onSearchClick=(e)=>{
    getRecipes()
    setSearch('')
  }
  return (
    <>
         {/* <h1>Food Recipies App</h1> */}
         <Header search={search}  onInputChange={onInputChange} onSearchClick={onSearchClick}/>
         <div className='container'>
             <Recipes recipe={recipe}/>
         </div>
    </>
  )
}

export default App







