import React from "react";
import "./style.css"

const Input = ({ setSearch }) => {
    return (
        <input className="header__input" type="text" placeholder={"Поиск"} onChange={e => setSearch(e.target.value)}></input>
    )
}

export default Input;