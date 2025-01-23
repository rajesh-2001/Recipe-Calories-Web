import Order from "./Order";
import OrderProcessing from "./OrderProcessing";

const Table = () => {
    return (
        <div className="flex flex-col">
            <Order></Order>
            <OrderProcessing></OrderProcessing>
        </div>
    );
};

export default Table;