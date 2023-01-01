import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand">EziLine</Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav d-flex align-items-center ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <button className="btn btn-success btn-sm">
                  <FaShoppingBasket />{" "}
                  <span className="badge">{cartItems.length}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
