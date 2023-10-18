import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import CreateRecipe from './Components/CreateRecipe'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReadRecipe from './Components/ReadRecipe'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/auth/register" element = {<Registration/>}/>
          <Route path = "/auth/login" element = {<Login/>}/>
          <Route path = "/recipe/create-recipe" element = {localStorage.length > 0 ? <CreateRecipe/>:<Login/>}/>
          <Route path = "/read-recipe/:id" element = {<ReadRecipe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
