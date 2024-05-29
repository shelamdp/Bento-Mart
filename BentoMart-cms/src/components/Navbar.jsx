import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        try {
            localStorage.clear()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mb-5'>
            <nav className="navbar navbar-expand navbar-light top-navbar py-0 bg-danger">
                <div className="container-md w-75 fixed-nav-padding justify-content-end ">
                    <ul className="navbar-nav ml-auto d-flex gap-3">
                        <li className="nav-item px-3" onClick={handleLogout}><a  className='fw-bold text-light text-decoration-none cursor-pointer'>Logout</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-0" style={{ maxHeight: '80%' }}>
                <div className="container px-md-0 py-md-0 justify-content-start">
                    <a >
                        <img style={{ height: '150px', width: '150px' }} src="https://www.hokben.co.id/assets/img/logo_hokben_1.png" alt="" />
                    </a>
                    <ul className="navbar-nav list-unstyled ml-auto">
                        <li className="px-3">
                            <NavLink to="/"
                                className={({ isActive }) => isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Dashboard
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="/menu"
                                className={({ isActive }) => isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Menu
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="/category"
                                className={({ isActive }) => isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Category
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to="/register"
                                className={({ isActive }) => isActive ? "fw-bold text-dark text-decoration-none" : "text-dark text-decoration-none"}>Register New Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;