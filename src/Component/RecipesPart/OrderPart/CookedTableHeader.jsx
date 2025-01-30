const CookedTableHeader = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className="text-[#878787] text-base font-medium mt-6">
                        <th className="w-[7%]"></th>
                        <th className="w-[32%]">Name</th>
                        <th className="w-[25%]">Time</th>
                        <th className="w-[25%]">Calories</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default CookedTableHeader;