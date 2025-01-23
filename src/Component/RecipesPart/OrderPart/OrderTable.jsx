const OrderTable = ({order}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <tbody>
                    <tr className="text-[#878787] text-base font-medium mt-6">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <button>Processing</button>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;