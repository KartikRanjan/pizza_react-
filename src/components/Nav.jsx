import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext);

  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  return (
    <>
      <nav className="py-4 px-12 md:px-36">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <div>
              <ul className="flex">
                <li className="hidden sm:flex  mr-6">
                  <Link to="/">Home</Link>
                </li>
                <li className="hidden sm:flex  mr-6">
                  <Link to="/products">Products</Link>
                </li>
                <li className="hidden sm:flex  mr-6">
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="ml-6 items-center">
              <Link to="/cart">
                <div style={cartStyle}>
                  <span className="text-white">
                    {cart.totalItems ? cart.totalItems : 0}
                  </span>
                  <img
                    className="ml-2"
                    src="/images/cart.png"
                    alt="cart_img"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div class="bg-gray-200 flex justify-evenly fixed inset-x-0 bottom-0 sm:hidden">
          <Link
            class="py-4 px-8 rounded-md hover:bg-yellow-400 hover:shadow"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <Link
            className="py-4 px-8 rounded-md hover:bg-yellow-400 hover:shadow"
            to="/products"
          >
            <svg
              width="20px"
              height="18px"
              viewBox="0 0 20 18"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Rounded"
                  transform="translate(-680.000000, -3169.000000)"
                >
                  <g id="Maps" transform="translate(100.000000, 3068.000000)">
                    <g
                      id="-Round-/-Maps-/-restaurant_menu"
                      transform="translate(578.000000, 98.000000)"
                    >
                      <g transform="translate(0.000000, 0.000000)">
                        <polygon
                          id="Path"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M8.1,13.34 L10.93,10.51 L4.74,4.33 C4.26,3.85 3.43,3.98 3.13,4.6 C2.42,6.09 2.68,7.92 3.91,9.16 L8.1,13.34 Z M14.88,11.53 C16.41,12.24 18.56,11.74 20.15,10.15 C22.06,8.24 22.43,5.5 20.96,4.03 C19.5,2.57 16.76,2.93 14.84,4.84 C13.25,6.43 12.75,8.58 13.46,10.11 L4.4,19.17 C4.01,19.56 4.01,20.19 4.4,20.58 C4.79,20.97 5.42,20.97 5.81,20.58 L12,14.41 L18.18,20.59 C18.57,20.98 19.2,20.98 19.59,20.59 C19.98,20.2 19.98,19.57 19.59,19.18 L13.41,13 L14.88,11.53 Z"
                          id="🔹-Icon-Color"
                          fill="#1D1D1D"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            className="py-4 px-8 rounded-md hover:bg-yellow-400 hover:shadow"
            to="/contact"
          >
            <i class="far fa-address-book"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
