import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-primary p-2 text-light">
          <ul className="w-25 d-flex justify-content-between list-unstyled align-items-center mt-2">
            <li>
              <NavLink to="/home" className="text-decoration-none text-light">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboute" className="text-decoration-none text-light">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contant" className="text-decoration-none text-light">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-decoration-none text-light">
                login
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="text-decoration-none text-light">
                News
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
