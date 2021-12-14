import Product from "../../components/product/Product";
import "./Buyer.css";
import { useState, useEffect } from "react";
import CartPage from "../cart/CartPage";

const Buyer = (props) => {
  const { products, onAdd, onRemove, cart } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = products.filter(
      (product) => product.name.toLowerCase().includes(searchTerm)
      // || product.seller.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <main>
      <header>
        <div className="topnav">
          <div class="brand">Mini Online Shopping</div>

          <div className="menuItem">
            {" "}
            <a href="login">Login</a>
          </div>
          <div className="menuItem">
            {" "}
            <a href="#cart">
              <i className="fa fa-shopping-cart">
                {" "}
                <button id="btnNumItems">
                  {cart.length == 0 ? "" : cart.length}
                </button>
              </i>
            </a>
          </div>

          <div class="menuItem">
            <input
              class="inpSearch"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search..."
            />
            {/* <button className="btn" >Search</button> */}
          </div>
        </div>
      </header>

      <div className="buyer-content">
        <div className="row1" id="cart">
          {/* {searchResults
              ? searchResults.map((product) => (
                  <div>
                    <Product
                      key={product.id}
                      product={product}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></Product>
                  </div>
                ))
              : products.map((product) => (
                  <div>
                    <Product
                      key={product.id}
                      product={product}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></Product>
                  </div>
                ))} */}

          {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Product>
          ))}
        </div>

        <div className="row2">
          <CartPage cartItems={cart} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    </main>
  );
};

export default Buyer;
