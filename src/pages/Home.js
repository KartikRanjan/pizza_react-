import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="px-8 md:px-12 lg:px-20">
        <div className="hero py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-center md:w-1/2 py-8">
              <h6 className="text-lg">
                <em>Are you hungry?</em>
              </h6>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Don't Wait
              </h1>
              <button
                href="#Product"
                className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600"
              >
                Order Now
              </button>
            </div>
            <div className="flex flex-col justify-center items-center w-2/3 md:w-1/2 py-8">
              <img
                className="md:w-4/5"
                src="/images/pizza.png"
                alt="pizza"
              ></img>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <Products />
        </div>
      </div>
    </>
  );
};

export default Home;
