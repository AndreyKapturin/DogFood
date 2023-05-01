import React from "react";
import "./style.css"

const Input = ({ setSearch, location }) => {
    return (
        <input className="header__input" type="text" placeholder={"Поиск"} disabled={location.pathname !== "/catalog"} onChange={e => setSearch(e.target.value)}></input>
    )
}

export default Input;