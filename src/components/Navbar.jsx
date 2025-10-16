//importo il component Link per definire i collegamenti tra le pagine, e il NavLink per aggiungere la class active
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/globe_logo.png";

export default function Navbar() {
    return (
        // As a heading 
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-md">
                <span className="navbar-brand mb-0 h1" >
                    <img src={logo} alt="logo" className="logo" />
                </span>
                {/* ✨ 1. PULSANTE TOGGLER ✨ */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" // DEVE corrispondere all'id del div sottostante
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* 2. Il menu e la Search Bar vanno avvolti per essere collassabili */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/products" className="nav-link">Prodotti</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/contacts" className="nav-link">Contatti</NavLink>
                            </li>

                        </ul>

                        <form className="d-flex" role="search">
                            <input type="search"
                                className="form-control form-control me-2"
                                placeholder="Cerca prodotti..."
                                aria-label="Search" />
                            <button className="btn btn-outline-dark " type="submit">Cerca</button>
                            <button className="btn btn-outline-dark ms-2 " type="button">
                                Carrello 🛒
                            </button>

                        </form>
                    </div>
                </div>




            </div>
        </nav>
    )
};