import React from "react";
import "./style.css"
import CardList from "../CardList";

const Main = ({cards}) => {
    return <main className="main">
        <CardList cards={cards}/>
    </main>
}

export default Main;