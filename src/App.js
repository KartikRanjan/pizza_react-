//jshint esversion:6
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import { getCart, storeCart } from "./helpers";
import Cart from "./pages/Cart";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState({});

  //fetch cart from local Storage

  useEffect(() => {
    const cart = getCart().then((cart) => setCart(JSON.parse(cart)));
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/products" exact component={ProductsPage}></Route>
            <Route path="/products/:_id" component={SingleProduct}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
