import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/actions/auth";


export default function Header(props) {

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);

  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };
  // React.useEffect(() => {
  //   const results = people.filter(person =>
  //     person.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  const { products, onAdd, onRemove, cart } = props;
  const [searchTerm, setSearchTerm] = useState("");
  //const [searchResults, setSearchResults] = useState(products);

  const logoutHandler = () => {
    dispatch(logout());
    user = null;

  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    setUser(authState.user);
  }, [authState.user]);

  return (
    <div class="topnav">
      <div class="brand">Online Market</div>
      {(user && user.authorities[0].authority == "BUYER") && <div className="menuItem">
        {" "}
        <a href="#cart">
          <i className="fa fa-shopping-cart">
            {" "}
            <button id="btnNumItems">
              {cart.length == 0 ? "" : cart.length}
            </button>
          </i>
        </a>
      </div>}

      {(user && user.authorities[0].authority == "BUYER") && <div className="menuItem">
        <input
          className="inpSearch"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
        {/* <button className="btn" >Search</button> */}
      </div>}
      <div class="menuItem">
        {!user && <Link to="/login" id="login-bttun">Login</Link>}

        {user && <Link to="/" id="logout-bttun" onClick={logoutHandler}>Logout</Link>}
      </div>
    </div>
  );

  // if (user.authorities[0].authority == "BUYER") {
  //   return (
  //     <header>
  //       <div className="topnav">
  //         <div className="brand">Mini Online Shopping</div>

  //         <div className="menuItem">
  //           {" "}
  //           <a href="login">Logout</a>
  //         </div>
  //         <div className="menuItem">
  //           {" "}
  //           <a href="#cart">
  //             <i className="fa fa-shopping-cart">
  //               {" "}
  //               <button id="btnNumItems">
  //                 {cart.length == 0 ? "" : cart.length}
  //               </button>
  //             </i>
  //           </a>
  //         </div>

  //         <div className="menuItem">
  //           <input
  //             className="inpSearch"
  //             value={searchTerm}
  //             onChange={handleChange}
  //             placeholder="Search..."
  //           />
  //           {/* <button className="btn" >Search</button> */}
  //         </div>
  //       </div>
  //     </header>
  //   );
  // }
  // else if (user.authorities[0].authority == "SELLER") {
  //   return (
  //     <header>
  //       <div className="topnav">
  //         <div className="brand">Mini Online Shopping</div>
  //         <div className="menuItem">
  //           <a href="login">Login</a>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // }
  // else {
  //   return (
  //     <header>
  //       <div className="topnav">
  //         <div className="brand">Mini Online Shopping</div>
  //         <div className="menuItem">
  //           <a href="login">Login</a>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // }
}





  //       return (
  //     <div>
  //       <form>
  //         <input
  //           type="search"
  //           placeholder="Search"
  //           className="me-2"
  //           aria-label="Search"
  //           value={searchTerm}
  //           onChange={handleChange}
  //         />
  //         <button variant="outline-success">Search</button>
  //       </form>
  //       <ul>
  //         {searchResults.map(item => (
  //           <li>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }
