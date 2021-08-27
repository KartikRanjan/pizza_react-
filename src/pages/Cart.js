import { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    if (priceFetched === true) {
      return;
    }
    console.log("Cart", Object.keys(cart.items));

    fetch("https://star-spark-pasta.glitch.me//api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        togglePriceFetched(true);
      });
  }, [cart, priceFetched]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productId) => {
    const existingQty = cart.items[productId];
    if (existingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  };

  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    setProducts(products.filter((product) => product._id !== productId));
  };

  const handleOrderNow = () => {
    window.alert("Order Placed Succesfully");
    setProducts([]);
    setCart({});
  };

  return products.length ? (
    <div className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 min-h-screen">
      <h1 className="my-12 text-sm text-center font-bold md:text-lg border-b">
        Cart items
      </h1>

      <ul>
        {products.map((product) => {
          return (
            <li key={product._id} className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-10 sm:h-16"
                    src={product.image}
                    alt="pizza"
                  />
                  <span className="text-xs md:text-sm font-semibold ml-4 w-16 md:w-36">
                    {product.name}
                  </span>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      decrement(product._id);
                    }}
                    className="bg-yellow-500 text-xs md:text-sm font-semibold px-3.5 py-1.5 md:px-5 sm:py-1.5 rounded-full leading-none"
                  >
                    -
                  </button>
                  <b className="px-4">{getQty(product._id)}</b>
                  <button
                    onClick={() => {
                      increment(product._id);
                    }}
                    className="bg-yellow-500 text-xs md:text-sm font-semibold px-3.5 py-1.5 md:px-5 sm:py-1.5 rounded-full leading-none"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs md:text-sm font-semibold">
                  ₹ {getSum(product._id, product.price)}
                </span>
                <button
                  onClick={() => {
                    handleDelete(product._id);
                  }}
                  className="bg-red-500 text-xs md:text-sm font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <hr className="my-6" />
      <div className="text-right text-sm md:text-base ">
        <b>Grand Total:</b> ₹ {total}
      </div>
      <div className="text-right mt-6">
        <button
          onClick={handleOrderNow}
          className="bg-yellow-500 text-xs md:text-sm font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-full leading-none"
        >
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <img
      className="mx-auto mt-12 px-8 min-h-full"
      src="/images/empty-cart.png"
      alt="empty_cart"
    />
  );
};

export default Cart;
