import React from "react";
import "./style.css"
import CardList from "../../CardList";
import BackBtn from "../../BackBtn";
import NotFound from "../../NotFound";

const FavoritePage = ({ myFavProduct, user, changeLike }) => {
    
    return (
        <div className="favoritePage">
            <BackBtn />
            {myFavProduct.length === 0 && <NotFound text="Пусто... Добавьте товары из каталога!" buttonText="В каталог" buttonPath="/catalog" />}
            <CardList cards={myFavProduct} user={user} changeLike={changeLike} className={"favoritePageCardList"} />
        </div>
    )
}

export default FavoritePage;