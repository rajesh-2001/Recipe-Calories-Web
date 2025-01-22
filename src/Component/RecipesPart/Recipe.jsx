import { FaRegClock } from "react-icons/fa6";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipeInfo }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipeInfo
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={recipe_image} className="h-[300px] w-full p-6 rounded-2xl" />
            </figure>
            <div className="p-6">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <h3>Ingredients: {ingredients.length}</h3>
                {
                    ingredients.map(elements=><li>{elements}</li>)
                }
                <div className="flex justify-between">
                    <div className="flex">
                        <FaRegClock /> <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex">
                        <AiOutlineFire /> <p>{calories} calories</p>
                    </div> 
                </div>
                <button>Want to cock</button>
            </div>
        </div>
    );
};

export default Recipe;