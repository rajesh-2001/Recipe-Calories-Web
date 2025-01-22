import { MdOutlineAccountCircle } from "react-icons/md";
const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    {/* For Small Image */}
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipe</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-[#150B2B]">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-normal text-[#150B2BB3]">
                        <li><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <button className="ml-4 bg-[#0BE58A] rounded-[50px] "><MdOutlineAccountCircle className="w-6 h-6"></MdOutlineAccountCircle></button>
                </div>
            </div>
        </div>
    );
};

export default Header;