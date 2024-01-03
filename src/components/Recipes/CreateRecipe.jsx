import { useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const CreateRecipe = () => {
  const navigate = useNavigate()
  const [recipeData, setRecipeData] = useState({
    title: "",
    category: "",
    author: "",
    origin: "",
    ingredients: [],
    steps: [],
    image : ""
  });

  const handleIngredientsChange = (e, index) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients[index] = e.target.value;
    setRecipeData({ ...recipeData, ingredients: newIngredients });
    // console.log("Nouvelle recette : ", recipeData);

  };

  const handleStepsChange = (e, index) => {
    const newSteps = [...recipeData.steps];
    newSteps[index] = e.target.value;
    setRecipeData({ ...recipeData, steps: newSteps });
  };

  const addIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ""],
    });
    // console.log("Nouvelle recette : ", recipeData);

  };

  const addStep = () => {
    setRecipeData({
      ...recipeData,
      steps: [...recipeData.steps, ""],
    });
    // console.log("Nouvelle recette : ", recipeData);

  };

// =============================Upload Images to Cloudinary==================================
const [recipeImage, setRecipeImage] = useState("");
const [imagePreview, setImagePreview] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const handleImageChange=(event)=>{
  const file = event.target.files.item(0)
  setRecipeImage(file);
  setImagePreview(URL.createObjectURL(file));
}

// ===============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ------------------------------------------------------
    setIsLoading(true)
    // const preset_key = "";
    const formData = new FormData();
    const cloud_name = "dwimur9lx";
    const upload_preset = "ml_default";
    try {
      let imageURL;
      if (recipeImage && ( recipeImage.type === "image/png" || recipeImage.type === "image/jpg" || recipeImage.type === "image/jpeg")){
        formData.append("file",recipeImage);
        formData.append("cloud_name",cloud_name);
        formData.append("upload_preset",upload_preset);
        // axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData).then(res=> console.log(res.data)).catch(err=>console.log(err));
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: "post",
            body: formData
          }
        ) 
        const  imgData = await response.json()

          imageURL = imgData.secure_url;
          setImagePreview(null)
          console.log(imageURL);
          
          axios.post("http://localhost:3000/recipes",{ ...recipeData, image: imageURL }).
          then(res => {
            alert(`Recipe : ${res.data.title} create successfully`)
            navigate("/dashboard/recipes")
          }).
          catch(err => console.log(err))
          console.log("Nouvelle recette : ", recipeData);
      
          setRecipeData({
            title: "",
            category: "",
            author: "",
            origin: "",
            ingredients: [],
            steps: [],
         
          });
      }

    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
    // ------------------------------------------------------

  };

  return (
    <>
    <Navbar />
      <Sidebar />
      <div className="sm:ml-64">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-28">
          <div className="mx-auto max-w-full p-4 ">
            <h1 className="text-3xl font-bold mb-4">
              Créer une recette 
              {
                imagePreview && (<img src={imagePreview && imagePreview} className="w-16 rounded-full" alt="Avatar" /> )
              }
            
            </h1>
            <form onSubmit={handleSubmit}>

            <div className="flex flex-row mb-4 ">
              <div className="basis-1/2 mx-2">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2"> Title </label>
                <input type="text" id="title" value={recipeData.title} 
                  onChange={(e) =>{setRecipeData({ ...recipeData, title: e.target.value })}}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Titre de la recette"
                />
              </div>
              <div className="basis-1/2 mx-2">
              <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                  Catégorie
                </label>
                <input type="text" id="category" value={recipeData.category}
                  onChange={(e) =>{setRecipeData({ ...recipeData, category: e.target.value })}}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"  placeholder="Catégorie de la recette"
                />
              </div>
            </div>

            <div className="flex flex-row mb-4 ">
              <div className="basis-1/3 mx-2">
                <label htmlFor="origin" className="block text-gray-700 font-bold mb-2">
                  Origin
                </label>
                <input  type="text" id="origin"  value={recipeData.origin}
                  onChange={(e) =>{setRecipeData({ ...recipeData, origin: e.target.value })}}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Catégorie de la recette"
                />
              </div>
              <div className="basis-1/3 mx-2">
                <label htmlFor="author"  className="block text-gray-700 font-bold mb-2" >
                  Author
                </label>
                <input type="text" id="author"  value={recipeData.author}
                  onChange={(e) =>{setRecipeData({ ...recipeData, author: e.target.value })}}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Catégorie de la recette"
                />
              </div>
              <div className="basis-1/3 mx-2">

              <div className="mb-3">
                <label htmlFor="formFile" className="mb-2 block text-gray-700 font-bold">Default file input example</label>
                <input name="image"  onChange={handleImageChange} accept="image/png ,image/jpg ,image/jpeg" className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" id="formFile" />
              </div>

              </div>
            </div>

            <div className="flex flex-row mb-4">
              <div className="basis-1/2 mx-2">
              <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
                  Ingrédients
                </label>
                {recipeData.ingredients.map((ingredient, index) => (
                  <input  key={index}  type="text"  value={ingredient}
                    onChange={(e) => handleIngredientsChange(e, index)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" placeholder={`Ingrédient #${index + 1}`}
                  />
                ))}
                <button type="button" onClick={addIngredient} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                  Ajouter ingrédient
                </button>
              </div>
              <div className="basis-1/2 mx-2">
              <label htmlFor="steps" className="block text-gray-700 font-bold mb-2" >
                  Étapes
                </label>
                {recipeData.steps.map((step, index) => (
                  <textarea key={index} value={step} rows="2"
                    onChange={(e) => handleStepsChange(e, index)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2" placeholder={`Étape #${index + 1}`}
                  />
                ))}
                <button type="button"  onClick={addStep} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                  Ajouter étape
                </button>
              </div>
            </div>

            {
              isLoading 
              ?
              "uploading ... " 
              :
              <button type="submit"  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  >
                Ajouter recette
              </button>
            }
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
