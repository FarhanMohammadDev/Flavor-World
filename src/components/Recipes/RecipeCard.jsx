import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  return (
    <div className="mt-20 bg-white rounded-md overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src={recipe.image}
        alt="Recipe"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <p className="text-lg italic font-semibold text-rose-800 mb-4">{recipe.category}</p>
        <p className="text-gray-700 mb-4">{recipe.author}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{recipe.origin}</span>
          <Link
                to={`/details/${recipe.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Recipe
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
    </div>
  );
};

export default RecipeCard;
