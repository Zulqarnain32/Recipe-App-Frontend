import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ReadRecipe = () => {
  
    const { id } = useParams()
    const [ recipe,setRecipe ] = useState([])

    useEffect(() => {
       axios.get("https://recipe-app-backend-eight.vercel.app/recipe/recipe-by-id/"+ id)
       .then(result => {
        console.log(result);
        setRecipe(result.data)
       }).catch(err => console.log(err))
    }, [])

    const handleSaveRecipe = () => {
      console.log("recipe save btn");
    };

  return (
    <div className='single-recipe'>
        <div className='single-img-side'>
            <img src={recipe.imageUrl} className='single-recipe-img'/>
        </div>
        <div className='single-img-info'>
           <h1 className='r-name'>{recipe.name}</h1>
           <button className="save-recipe" onClick={handleSaveRecipe}>save</button>
           <h3>Ingredients</h3>
           <p>{recipe.ingredients}</p>
           <h3>Description</h3>
           <p>{recipe.description}</p>
        </div>
    </div>
  )
}

export default ReadRecipe
