import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import user from "../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg";
import logout from "../assets/icons/logout_FILL0_wght400_GRAD0_opsz48.svg";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // 토큰 삭제
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <header className="header">
            <h1 className="title">MTL</h1>
            <button to="/userid" className="userid">
                <img src={user} alt="user" />
                <p>User ID</p>
            </button>
            <button className="login" onClick={handleLogout}>
                <img src={logout} alt="logout" />
                <p>로그아웃</p>
            </button>
        </header>
    );
}

export default Header;
