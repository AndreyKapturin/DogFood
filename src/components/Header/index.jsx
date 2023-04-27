import React from "react";
import "./style.css"
import Logo from "../images/Logo";
import Input from "../Input";
import Favorite from "../images/Favorite";
import Cart from "../images/Cart";
import Profile from "../images/Profile";

const Header = ({ setSearch }) => {
    return (
        <header className="header">
            <Logo />
            <Input setSearch={setSearch} />
            <div className="header__icons">
                <a href="/"><Favorite /></a>
                <a href="/"><Cart /></a>
                <a href="/"><Profile /></a>
            </div>
        </header>)
}

export default Header;