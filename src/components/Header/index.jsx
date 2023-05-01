import React from "react";
import "./style.css"
import Logo from "../images/Logo";
import Input from "../Input";
import Favorite from "../images/Favorite";
import Cart from "../images/Cart";
import Profile from "../images/Profile";
import { Link, useLocation } from "react-router-dom";
import Bubble from "../Bubble";

const Header = ({ setSearch, myFavProduct }) => {
    const location = useLocation()
    return (
        <header className="header">
            <Link to="/"><Logo /></Link>
            {location.pathname === "/catalog" && <Input setSearch={setSearch} />}
            <div className="header__icons">
                <Link className="header-icon-link" to="/favorite"><Bubble products={myFavProduct} /><Favorite /></Link>
                <a href="/"><Cart /></a>
                <a href="/"><Profile /></a>
            </div>
        </header>)
}

export default Header;