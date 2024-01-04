import React from 'react';

const RecipeCard = ({recipe}) => {
  return (
    <div className="mt-20 bg-white rounded-md overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src="https://placekitten.com/640/360"
        alt="Recipe"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <p className="text-lg italic font-semibold text-rose-800 mb-4">{recipe.category}</p>
        <p className="text-gray-700 mb-4">{recipe.author}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{recipe.origin}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
