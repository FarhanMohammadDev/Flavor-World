import Footer from "../Footer";
import Navbar from "../Navbar";

 // =============== hiba ================
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
 // =============== hiba ================

const Details = () => {

  // =============== hiba ================
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes/" + id)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, []);

  // =============== hiba ================

  return (
    <>
      <Navbar />
      {/* ==============================================hiba======================================== */}
       <div className="max-w-2xl m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-t-lg" src={recipe.image} alt="" />
        </div>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Category : {recipe.category}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Origin : {recipe.origin}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Author : {recipe.author}
          </p>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Ingredients:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {recipe?.ingredients?.length > 0 &&
              recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
          </ul>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Steps:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {recipe?.steps?.length > 0 &&
              recipe.steps.map((step, index) => {
                return <li key={index}>{step}</li>;
            })}
          </ul>
        </div>
      </div> 
      {/* =============================================hiba========================================= */}

      <Footer />
    </>
  );
};

export default Details;