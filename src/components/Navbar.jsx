//importo il component Link per definire i collegamenti tra le pagine, e il NavLink per aggiungere la class active
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/globe_logo.png";

export default function Navbar() {
    return (
        // As a heading 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" >
                    <img src={logo} alt="logo" className="logo" />
                </span>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink to="/products">Prodotti</NavLink>
                        </li>
                        <li className="nav-item p-3">
                            <NavLink to="/contacts">Contatti</NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
};