import React from "react";
import "./style.css"
import CardList from "../../CardList";
import BackBtn from "../../BackBtn";

const FavoritePage = ({ myFavProduct, user, changeLike }) => {
    
    return (
        <div className="favoritePage">
            <BackBtn />
            <CardList cards={myFavProduct} user={user} changeLike={changeLike} className={"favoritePageCardList"} />
        </div>
    )
}

export default FavoritePage;