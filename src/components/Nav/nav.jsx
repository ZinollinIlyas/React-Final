import React from "react";
import { Link } from "react-router-dom";
require('./nav.css')

const Nav = () => {
    return(
        <nav>
            <div className="flex-between">
                <h1>Start-Wars-Pedia</h1>
                <div className="flex-between links-block">
                    <Link to="/" className="nav-link">
                        <p>Home</p>
                    </Link>
                    <Link to="/people" className="nav-link">
                        <p>People</p>
                    </Link>
                    <Link to="/planets" className="nav-link">
                        <p>Planets</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;