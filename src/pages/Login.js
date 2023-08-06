import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignupAuth.scss"
import mushroom from "../assets/img/Maplemushroom.png";

function Auth() {
    const [formData, setFormData] = useState({
        ID:"",
        PW:"",
    })

    const history = useNavigate()

    const handleChange = (e) => {
        const{ name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form data submitted:', formData)
        if (formData.ID === "user" && formData.PW === "1111") {
            history("/main")
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
            <img src={mushroom} alt="mushroom" style={{ position: "fixed", bottom: "10px", right: "10px" }} />
        </div>
    )
}

export default Auth;