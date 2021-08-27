import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../CartContext";

const SingleProduct = () => {
  const { cart, setCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const params = useParams();
  const history = useHistory();

  //

  const addToCart = (event, product) => {
    event.preventDefault();

    let _cart = { ...cart }; //{}

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  //

  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me//api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params._id]);

  return (
    <>
      <div className=" mx-8 md:mx-16 lg:mx-20 mt-12">
        <button
          className="mb-12 font-bold"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>

        <div
          className="
          bg-white
          shadow-md
          h-96
          mx-3
          my-6
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 
          md:w-96
          md:w-1
        "
        >
          <img
            className="h-1/2 sm:h-full rounded-md sm:w-1/2"
            src={product.image}
            alt="imag"
          />

          <div
            className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
          >
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                {product.name}
              </h1>
              <span className="text-xs text-indigo-300 mt-0">
                {product.size}
              </span>
            </div>
            <p className="text-xs text-gray-500 w-4/5">
              Ergonimical for human body curv
            </p>
            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-gray-500">${product.price}</h1>
              <button
                onClick={(e) => {
                  addToCart(e, product);
                }}
                className={`${
                  isAdding ? "bg-green-500" : "bg-yellow-500"
                } mr-5 text-white px-3 py-1 rounded-sm shadow-md`}
              >
                Add{isAdding ? "ed" : ""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
