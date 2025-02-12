import React from "react";
import { NavLink } from "react-router-dom";
import "../component/NavBar.css";
import fluent from "../images/fluent_box-multiple-20-regular.png";
import bx from "../images/bx_bx-store-alt.png";
import category from "../images/carbon_category-new-each.png";
import invo from "../images/la_file-invoice-dollar.png";
import deli from "../images/carbon_delivery-truck.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <div className="logo-im">
        <h1>Logo</h1>
      </div>

      {/* Link Section */}
      <div className="link-section">
        <ul>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img src={fluent} alt="Products Icon" /> Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img src={bx} alt="Brands Icon" />
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img src={category} alt="Categories Icon" /> Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoice"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img src={invo} alt="Invoice Icon" />
              Invoice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suppliers"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <img src={deli} alt="Suppliers Icon" /> Suppliers
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
