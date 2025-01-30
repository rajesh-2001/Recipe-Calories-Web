const OrderProcessingTable = ({order}) => {
    const {recipe_name,preparing_time,calories} = order;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    <tr className="bg-[#28282808]">
                        <td className="w-[7%]">1</td>
                        <td className="w-[32%]">{recipe_name}</td>
                        <td className="w-[25%]">{preparing_time} minutes</td>
                        <td className="w-[25%]">{calories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderProcessingTable;