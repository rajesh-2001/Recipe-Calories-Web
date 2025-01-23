import { useState } from "react";
import AllRecipes from "./AllRecipes";
import OrderSection from "./OrderPart/OrderSection";

const RecipeSection = () => {

    const [orders,setOrder] = useState([])
    
    const handleCooked = order =>{
        const newOrder = [...orders,order]
        setOrder(newOrder)
        
    }

    return (
        <div className="mt-24">
            <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-semibold mb-6">Our Recipes</h3>
                <p className="text-base font-normal md:w-2/3 mx-auto text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex flex-col gap-5 md:flex-row mt-12">
                <div className="md:w-[54]">
                    <AllRecipes handleCooked={handleCooked}></AllRecipes>
                </div>
                <div className="md:w-[45%]">
                   <OrderSection orders={orders}></OrderSection>
                </div>
            </div>
        </div>
    );
};

export default RecipeSection;