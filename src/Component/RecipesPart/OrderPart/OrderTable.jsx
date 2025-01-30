const OrderTable = ({ order, handleOrderProcessing }) => {
    const { recipe_name, preparing_time, calories } = order;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    <tr className="bg-[#28282808]">
                        <td className="w-[7%]">1</td>
                        <td className="w-[25%]">{recipe_name}</td>
                        <td className="w-[17%]">{preparing_time} minutes</td>
                        <td className="w-[20%]">{calories} calories</td>
                        <td className="ml-3"><button className="text-base font-medium bg-[#0BE58A] rounded-[50px] px-3 py-2" onClick={()=>handleOrderProcessing(order)}>Processing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;