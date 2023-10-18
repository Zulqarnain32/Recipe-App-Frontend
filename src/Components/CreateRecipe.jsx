import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateRecipe = () => {

    const [ recipe,setRecipe ] = useState({
        name:"",
        description:"",
        ingredients:"",
        imageUrl:"",
        userId:window.localStorage.getItem("id")
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name,value } = event.target;
        setRecipe({...recipe,[name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("https://recipe-app-backend-eight.vercel.app/recipe/create-recipe",recipe)
      .then(result => {
        console.log(result);
        navigate('/')
        alert("recipe created")
      }).catch(err => console.log(err))
      
    }
  return (
    <>
      <div className="registration-container">
        <div className="register-sub-box">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Create Recipe</h1>
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Recipe Name"
              onChange={handleChange}
              name="name"
              required 
              autoComplete = "off"
            />
            <h3>Description</h3>
            <input
              type="text"
              placeholder="Enter Description"
              onChange={handleChange}
              name="description"
              required 
              autoComplete = "off"
            />
            <h3>Ingredients</h3>
            <input
              type="text"
              placeholder="Enter Ingredients"
              onChange={handleChange}
              name="ingredients"
              required 
              autoComplete = "off"
            />
            <h3>Image URL</h3>
            <input
              type="text"
              placeholder="Enter URL "
              onChange={handleChange}
              name="imageUrl"
              required 
              autoComplete = "off"
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateRecipe
