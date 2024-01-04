import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    {/* ====================OUR MENU============== */}
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/recipes")
        .then((res) => setRecipes(res.data))
        .catch((err) => console.log(err));
    }, []);
  {/* ====================OUR MENU============== */}

  {/* ====================OUR MENU============== */}

  return (
    <>
      <Navbar />

      <div className="top-0  mx-auto mt-10 flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-black">
        <p className="p-2 font-bold uppercase text-slate-900">
        Healthy & Testy Food
        </p>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
        Enjoy Healthy Life & Testy Food.
        </h1>

        <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
        Food is an important part Of a balanced Diet
        </p>
      
        <Link to="/recipes" className="bg-blue-500 mt-5 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Get started</Link>
      </div>

      {/* ==================== OUR MENU============== */}
         <div className="top-0  mx-auto mt-10 text-center text-black  h-screen w-full max-w-screen-xl">
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl p-5">
          OUR MENU
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
        {recipes.map((recipe, index) => (

          <div key={index}
            className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={recipe.image}
              alt="" />
            <div className="flex flex-col justify-center p-6">
              <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {recipe.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Category : {recipe.category}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Origin : {recipe.origin}
              </p>
            <Link
                to={`/details/${recipe.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* ==================== /OUR MENU============== */}
      <Footer />
    </>
  );
};

export default Home;
