import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import storeProducts from "./data/product";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const handleCart = async (productId, quantity) => {
  console.log("Cart Added!");
  // const item = await commerce.cart.add(productId, quantity);

  // setCart(item.cart);
};

function App() {
  return (
    <div className="App">
      {/* {console.log(storeProducts)} */}
      <Router>
        <div className="container">
          <section className="main">
            <Navbar />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <ProductList
                  categories={storeProducts}
                  onAddToCart={handleCart}
                />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
