import { useState } from "react";
import Order from "./Order";
import OrderProcessing from "./OrderProcessing";

const OrderSection = ({orders}) => {

    const [cookedOrder,setCookedOrder]=useState([])
    const handleOrderProcessing = order =>{
        const newCookedOrder = [...cookedOrder,order];
        setCookedOrder(newCookedOrder);
    }
    return (
        <div className="border-2 border-[#28282833] rounded-2xl w-full">
            <Order orders={orders} handleOrderProcessing={handleOrderProcessing}></Order>
            <OrderProcessing cookedOrder={cookedOrder}></OrderProcessing>
        </div>
    );
};

export default OrderSection;