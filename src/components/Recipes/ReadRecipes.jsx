import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

const ReadRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, [recipes]);

  const handleDelete =(id)=>{
    axios.delete("http://localhost:3000/recipes/"+id).
    then(res => {
      console.log(res.data)
      navigate("/dashboard/recipes")
    }).
    catch((err) => console.log(err));
  }
  return (
    <>
    <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded">
              <Link
                to="/dashboard/recipes/create"
                className="bg-blue-500 mt-5 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow-lg shadow-blue-500/50 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >

                Create Recipe
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Origin
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => {
                return (
                  <tr key={index}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                    <td className="px-6 py-4">
                      
                      <img
                        src={recipe.image}
                        className="w-16 rounded-full"
                        alt="Avatar" />
                      </td>
                    <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                     {recipe.id} : {recipe.title}
                    </th>
                    <td className="px-6 py-4">{recipe.category}</td>
                    <td className="px-6 py-4">{recipe.author}</td>
                    <td className="px-6 py-4">{recipe.origin}</td>
                    <td className="px-6 py-4 text-center flex gap-5 ">
                      <div>
                      <Link to={`/dashboard/recipes/show/${recipe.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>

                      </Link>
                      </div>

                      <div>
                      <Link to={`/dashboard/recipes/edit/${recipe.id}`}  className="font-medium text-green-600 dark:text-green-500 hover:underline" >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      </Link>
                      </div>

                      <button onClick={()=>handleDelete(recipe.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline"  >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>

                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadRecipes;
