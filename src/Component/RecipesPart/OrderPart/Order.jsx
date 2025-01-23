import OrderTable from "./OrderTable";
import Table from "./Table";

const Order = ({orders}) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center mt-7 border-b-2 mx-16 pb-4">Want to cook: {orders.length}</h3>
            <Table></Table>
            <OrderTable orders={orders}></OrderTable>
        </div>
    );
};

export default Order;