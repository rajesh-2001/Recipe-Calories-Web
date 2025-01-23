import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const AllRecipes = ({handleCooked}) => {
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
            recipeInfo={recipeInfo} handleCooked={handleCooked}
            ></Recipe>)
           }
        </div>
    );
};

export default AllRecipes;