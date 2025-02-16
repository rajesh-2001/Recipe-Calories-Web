const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-[#878787] text-base font-medium mt-6">
                        <th className="w-[7%]"></th>
                        <th className="w-[25%]">Name</th>
                        <th className="w-[17%]">Time</th>
                        <th className="w-[20%]">Calories</th>
                        <th> </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Table;