import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="notFoundPage">
            <h2>Ошибка 404. Страницы по такому адресу не существует</h2>
            <Link to="/">
                <button className="searhNotFound__button">На главную</button>
            </Link>
        </div>
    )
}

export default NotFoundPage;