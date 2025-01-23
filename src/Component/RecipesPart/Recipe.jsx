import { FaRegClock } from "react-icons/fa6";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipeInfo, handleCooked }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipeInfo;
    return (
        <div className="p-6 border border-[#28282833] rounded-2xl shadow-lg">
            <figure>
                <img src={recipe_image} className="h-[280px] w-full  rounded-2xl" />
            </figure>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">{recipe_name}</h2>
                <p className="fira_font text-base text-[#878787] font-normal mt-4">{short_description}</p>

                <h3 className="mt-7 text-lg font-medium">Ingredients: {ingredients.length}</h3>

                <div className="border-b-2 border-[#2828281A] fira_font mt-4 text-base text-[#878787] font-normal pl-3 pb-4">
                    {
                        ingredients.map((elements,idx) => <li key={idx} className="mb-2">{elements}</li>)
                    }
                </div>

                <div className="flex gap-x-6 mt-6 fira_font text-base font-normal text-[#282828CC] mb-6">
                    <div className="flex gap-3 items-center">
                        <FaRegClock /> <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <AiOutlineFire /> <p>{calories} calories</p>
                    </div>
                </div>
                <button className="rounded-[50px] bg-[#0BE58A] text-lg font-medium px-6 py-3" onClick={()=>handleCooked(recipeInfo)}>Want to cock</button>
            </div>
        </div>
    );
};

export default Recipe;