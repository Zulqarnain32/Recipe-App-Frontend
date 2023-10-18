import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("https://recipe-app-backend-eight.vercel.app/recipe/recipes")
      .then((recipes) => {
        setRecipes(recipes.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="home-title">Your own Recipes </h1>
      <div className="your-recipe-container">
        {recipes.map((recipe, id) => (
          <div className="recipe-container" key={id}>
            <h2>
              <Link className="recipe-name" to={`/read-recipe/${recipe._id}`}>
                {recipe.name}
              </Link>
            </h2>
            <img src={recipe.imageUrl} className="recipe-img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
