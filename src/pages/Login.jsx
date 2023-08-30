import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignupAuth.scss";

function Auth() {
    const [formData, setFormData] = useState({
        ID: "",
        PW: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/login", { "id": formData.ID, "password": formData.PW });
            const token = response.data.accessToken; // 서버에서 받은 토큰
            console.log(token)
            if (token) {
                localStorage.setItem("token", token); // 로컬 스토리지에 토큰 저장
                console.log(localStorage.token)
                navigate("/main"); // 페이지 이동
            } else {
                console.log("로그인 실패");
            }
        } catch (error) {
            console.error("에러:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="mainbox">
                <h1 id="go" style={{ fontSize: '40px' }}>로그인</h1>
                <input 
                type="text"
                className="input"
                name="ID"
                value={formData.ID}
                onChange={handleChange}
                placeholder="아이디"
                style={{ outline: 'none' }}
                required/>
                <input 
                type="password"
                className="input"
                name="PW"
                value={formData.PW}
                onChange={handleChange}
                placeholder="비밀번호"
                style={{ outline: 'none' }}
                required/>
                <div id="checklog">
                    <input type="checkbox"/>
                    <label style={{ fontSize:"16px"}}>로그인 상태 유지</label>
                </div>
                <input type="submit" className="button" id="submit" value="로그인"  />
                <div className="bottombox" >
                    <p>계정이 없으십니까?</p>
                    <Link to="/Signup" id="go" style={{ textDecoration: 'none' }}>회원가입하기</Link>
                </div>
            </form>
        </div>
    )
}

export default Auth;
