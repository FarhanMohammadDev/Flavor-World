import { useParams } from "react-router-dom";
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import { useState,useEffect } from "react";
import axios from "axios";


const ShowRecipe = () => {
  const {id} =useParams();
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/recipes/"+id).then(res=> setRecipeData(res.data)).catch((err) => console.log(err));
    console.log(recipeData);
}, []);

  return (
    <>
    <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 h-screen justify-center items-center">



      <div
      className=" mt-16 mb-10 mx-auto flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={recipeData.image}
        alt="" />
      <div className="flex flex-col justify-center p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {recipeData.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Category : {recipeData.category}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
        Origin : {recipeData.origin}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
        author : {recipeData.author}
        </p>
      </div>
    </div>
    <div className="flex flex-row mb-4 ">
        <div className="basis-1/2 mx-2">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
         
         <li>
           <div className="flex-start flex items-center pt-3">
             <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
             <h4 className="mb-1.5 text-xl font-semibold">
             Ingredients
             </h4>
           </div>
           <div className="mb-6 ml-4 mt-2">
           {
                recipeData?.ingredients?.length > 0  &&    recipeData.ingredients.map((ingredient,index)=>{
                        return <p key={index} className="mb-3 text-slate-900">{ingredient}</p>
                    })
                }
           </div>
         </li>

        </ol>
        </div>
        <div className="basis-1/2 mx-2">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
         
         <li>
           <div className="flex-start flex items-center pt-3">
             <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
             <h4 className="mb-1.5 text-xl font-semibold">
             Steps
             </h4>
           </div>
           <div className="mb-6 ml-4 mt-2">
           {
              recipeData?.steps?.length > 0 &&    recipeData.steps.map((step,index)=>{return <p key={index} className="mb-3 text-slate-900"> {step} </p>})
            }
             
           </div>
         </li>

        </ol>
         </div>
      </div>



      </div>
    </>
  )
}

export default ShowRecipe