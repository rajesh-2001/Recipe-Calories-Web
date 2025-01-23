import Order from "./Order";
// import OrderProcessing from "./OrderProcessing";

const OrderSection = ({orders}) => {
    return (
        <div className="border-2 border-[#28282833] rounded-2xl w-full">
            <Order orders={orders}></Order>
            {/* <OrderProcessing></OrderProcessing> */}
        </div>
    );
};

export default OrderSection;