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
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div>
          <Link to="/">
            <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="ml-6">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
