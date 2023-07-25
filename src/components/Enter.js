import React from "react";
import "../Enter.scss"
import { Link } from "react-router-dom";

const Enter = () => {
    return (
        <div className="container">
            <h1>MapleTodoList</h1>
            <Link to="/login" type="button" className="first button">로그인</Link>
            <Link to="/Signup" type="button" className="second button">회원가입</Link>
        </div>
    )

}

export default Enter;
