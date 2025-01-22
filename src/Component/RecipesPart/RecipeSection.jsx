import AllRecipes from "./AllRecipes";

const RecipeSection = () => {
    return (
        <div className="mt-24">
            <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-semibold mb-6">Our Recipes</h3>
                <p className="text-base font-normal md:w-2/3 mx-auto text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex mt-12">
                <div>
                    <AllRecipes></AllRecipes>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default RecipeSection;