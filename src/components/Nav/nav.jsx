import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <div className="flex-between">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/people" className="nav-link">
                    People
                </Link>
                <Link to="/planets" className="nav-link">
                    Planets
                </Link>
            </div>
        </nav>
    );
}

export default Nav;