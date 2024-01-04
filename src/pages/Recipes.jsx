import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeCard from '../components/Recipes/RecipeCard'
import axios from 'axios'

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/recipes")
        .then((res) => setRecipes(res.data))
        .catch((err) => console.log(err));
    }, []);
    const handleFilterChange=()=>{
        console.log("jhgfx");
    }
  return (
    <>
     <Navbar/>
     

     <div className="flex justify-center items-center min-h-screen bg-gray-100">
     <div className="mb-4">
          <label htmlFor="filter" className="mr-2">
            Filter:
          </label>
          <select
            
            onChange={handleFilterChange}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
      <div className="container m-5 mx-auto p-4">
        <div className="flex mx-4">
            {
                recipes.map((recipe,index) =>(
                    <div key={index} className="w-1/4 px-4">
                        <RecipeCard recipe={recipe}/>
                    </div>
                )
                )
            }
        </div>
      </div>
    </div>
     <Footer/>
    </>
  )
}

export default Recipes