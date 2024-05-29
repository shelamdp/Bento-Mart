import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light top-navbar py-0 bg-danger">
        <div className="container-md w-75 fixed-nav-padding justify-content-end">
          <ul className="navbar-nav ml-auto d-flex mt-2 mb-2">
            <li className="nav-item px-3 bi bi-basket3-fill text-light fw-bold "> Cart</li>
            <li className="nav-item px-3 bi bi-person-fill text-light"><Link className="fw-bold text-light text-decoration-none" to="/login">Login</Link></li>
            <li className="nav-item px-3 fw-bold text-light">Logout</li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-0" style={{ maxHeight: '80%' }}>
        <div className="container-md w-75 px-md-0 py-md-0">
          <a >
            <img
              style={{ height: '150px', width: '150px' }}
              src="https://www.hokben.co.id/assets/img/logo_hokben_1.png"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav mx-auto d-flex list-unstyled">
              <li className="px-4"><NavLink to="/" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Home</NavLink>
                </li>
              <li className="px-4"><NavLink to="/menu" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Menu</NavLink>
                </li>
              <li className="px-4"><NavLink  to="/outlet" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Outlet</NavLink>
                </li>
              <li className="px-4"><NavLink to="/promotion" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Promotion</NavLink>
                </li>
              <li className="px-4"><NavLink to="/coorporate" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Coorporate</NavLink>
                </li>
              <li className="px-4"><NavLink to="/news-event" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>News&Event</NavLink>
                </li>
              <li className="px-4"><NavLink to="/contact" className={({ isActive }) =>
                isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Contact Us</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar