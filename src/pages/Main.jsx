import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import Profile from "../components/profile";
import Contents from "../components/contents";

function Main() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true); // 토큰이 있는 경우 인증됨
        } else {
            navigate('/login');
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return null; // 인증되지 않았으면 아무것도 렌더링하지 않음
    }

    return(
        <div style={{ height:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Header/>
            <Profile/>
            <Contents/>
        </div>
    );
}

export default Main;
