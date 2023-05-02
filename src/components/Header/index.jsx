import React, { useContext } from "react";
import "./style.css"
import Logo from "../images/Logo";
import Input from "../Input";
import Favorite from "../images/Favorite";
import Cart from "../images/Cart";
import Profile from "../images/Profile";
import { Link, useLocation } from "react-router-dom";
import Bubble from "../Bubble";
import { AppContext } from "../../context/AppContext";

const Header = () => {
    const { myFavProduct } = useContext(AppContext)
    const location = useLocation()
    return (
        <header className="header">
            <Link to="/"><Logo /></Link>
            <Input location={location} />
            <div className="header__icons">
                <Link className="header-icon-link" to="/favorite">{!!myFavProduct.length && <Bubble products={myFavProduct} />}<Favorite /></Link>
                <a href="/"><Cart /></a>
                <a href="/"><Profile /></a>
            </div>
        </header>)
}

export default Header;