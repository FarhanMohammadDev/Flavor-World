import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeCard from '../components/Recipes/RecipeCard'
import axios from 'axios'

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipesFilter, setRecipesFilter] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/recipes")
        .then((res) => {setRecipes(res.data);
            setRecipesFilter(res.data)})
        .catch((err) => console.log(err));
        axios
        .get("http://localhost:3000/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    }, []);
    const handleFilterChange=(e)=>{
        const filterData = recipes.filter(recipe => recipe.category == e.target.value);
        e.target.value === "all" ? setRecipesFilter(recipes) :setRecipesFilter(filterData);
        
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
            <option value="all">all</option>

            {
                categories.map((categorie,index)=>(
                    
                    <option key={index} value={categorie}>{ categorie}</option>
                ))
            }

          </select>
        </div>
      <div className="container m-5 mx-auto p-4">
        <div className="flex mx-4">
            {
                recipesFilter.map((recipe,index) =>(
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