import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss"
import user from "../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg";
import logout from "../assets/icons/logout_FILL0_wght400_GRAD0_opsz48.svg"

function Header() {
    return (
        <header className="header">
            <h1 className="title">MTL</h1>
            <Link to="/userid" className="userid">
            <img src={user} alt="user"/>
                <p>User ID</p>
            </Link>
            <Link to="/login" className="login">
            <img src={logout} alt="logout"/>
                <p>로그아웃</p>
            </Link>
        </header>
    )
}

export default Header