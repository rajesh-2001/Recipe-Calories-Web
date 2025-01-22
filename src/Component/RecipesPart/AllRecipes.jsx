import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const AllRecipes = () => {
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[recipes])

    return (
        <div className="grid gap-x-5 gap-y-4 md:grid md:grid-cols-2 border border-red-600">
           {
            recipes.map(recipeInfo=><Recipe key={recipeInfo.recipe_id}
            recipeInfo={recipeInfo}
            ></Recipe>)
           }
        </div>
    );
};

export default AllRecipes;