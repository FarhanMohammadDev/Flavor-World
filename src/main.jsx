// import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Recipes from './pages/Recipes.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Details from './components/Recipes/Details.jsx';
import ReadRecipes from './components/Recipes/ReadRecipes.jsx';
import CreateRecipe from './components/Recipes/CreateRecipe.jsx';
import ShowRecipe from './components/Recipes/ShowRecipe.jsx';
import EditRecipe from './components/Recipes/EditRecipe.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },  
  {
    path: "/recipes",
    element: <Recipes />,
    errorElement: <ErrorPage />,
  },  
  {
    path: "/details/:id",
    element: <Details />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/dashboard",
    // element: <Dashboard />,
    element: <ReadRecipes />,
    errorElement: <ErrorPage />,
  }
  , 
  {
    path: "/dashboard/recipes",
    element: <ReadRecipes />,
    errorElement: <ErrorPage />,
  }
  , 
  {
    path: "/dashboard/recipes/create",
    element: <CreateRecipe />,
    errorElement: <ErrorPage />,
  }
  , 
  {
    path: "/dashboard/recipes/show/:id",
    element: <ShowRecipe />,
    errorElement: <ErrorPage />,
  }
  , 
  {
    path: "/dashboard/recipes/edit/:id",
    element: <EditRecipe />,
    errorElement: <ErrorPage />,
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
    // <App />
  // </React.StrictMode>,
)
