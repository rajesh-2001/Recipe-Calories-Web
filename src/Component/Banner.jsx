const Banner = () => {
    return (
        <div
            className="hero min-h-screen mt-7 rounded-3xl"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/M1Yf4CG/Coocking.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
            <div className="hero-content">
                <div className="text-center">
                    <h1 className="mb-6 text-2xl md:text-5xl font-bold text-white md:mx-40">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-base md:text-lg font-normal text-white mb-8 md:mx-32">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <button className="text-base md:text-lg font-semibold bg-[#0BE58A] text-black rounded-[50px] mr-7 px-6 md:px-8 py-3">Explore Now</button>
                    <button className="text-base md:text-lg font-semibold bg-[#0BE58A] text-black rounded-[50px] px-6 md:px-8 py-3">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;