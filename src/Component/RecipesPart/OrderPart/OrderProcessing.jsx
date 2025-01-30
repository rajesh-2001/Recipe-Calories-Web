import CookedTableHeader from "./CookedTableHeader";
import OrderProcessingTable from "./OrderProcessingTable";

const OrderProcessing = ({ cookedOrder }) => {
    return (
        <div >
            <h3 className="text-2xl font-semibold text-center mt-7 border-b-2 mx-16 pb-4">Currently cooking: {cookedOrder.length} </h3>
            <CookedTableHeader></CookedTableHeader>
            {
                cookedOrder.map(order => <OrderProcessingTable key={order.recipe_id} order={order} ></OrderProcessingTable>)
            }
        </div>
    );
};

export default OrderProcessing;