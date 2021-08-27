import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://star-spark-pasta.glitch.me//api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <>
      <h1 className="text-lg md:text-3xl pb-4 sm:text-2xl text-center border-b-2 lg:text-left lg:ml-8 font-bold my-8">
        Products
      </h1>
      <div className="md:flex justify-around flex-wrap">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
