import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignupAuth.scss';
import mark from '../assets/icons/error_FILL0_wght400_GRAD0_opsz48.svg';

function Signup() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPW: '',
    username: '',
    email: '',
  });

  const [isDuplicateID, setIsDuplicateID] = useState(false);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsDuplicateID(false);
  }

  const handleInputFocus = (name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: '',
    }));
    setIsDuplicateID(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password === formData.confirmPW) {
      try {
        const response = await axios.post('http://localhost:3000/auth/register', { "id": formData.id, "username": formData.username, "email": formData.email, "password": formData.password });
        console.log(response.data)
        alert('회원가입이 완료되었습니다.');
        console.log(response.data.accessToken)
        localStorage.setItem("token", response.data.accessToken)
        navigate('/main')
      } catch (error) {
        console.error('에러:', error);
      }
    }
    else {
      alert('비밀번호가 일치하지 않습니다')
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="mainbox">
        <h1 id="go" style={{ fontSize: '40px' }}>
          회원가입
        </h1>
        <input
            type='text'
            id='name'
            className='input'
            name='username'
            value={formData.username}
            onChange={handleChange}
            onFocus={() => handleInputFocus('name')}
            placeholder={formData.username ? formData.username : '이름'}
            required
          />
          <input
            type='text'
            id='email'
            className='input'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleInputFocus('email')}
            placeholder={formData.email ? formData.email : '이메일'}
            required
          />
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            id="ID"
            className="input"
            name="id"
            value={formData.id}
            onChange={handleChange}
            onFocus={() => handleInputFocus('id')}
            placeholder={formData.id ? formData.id : '아이디'}
            required
            style={{ outline: 'none' }}
          />
          {isDuplicateID && (
            <React.Fragment>
              <img
                src={mark}
                alt="mark"
                className="error"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '20px',
                  height: '20px',
                  fill: '#FF3C11',
                }}
              />
              <p
                className="error-message"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '24px',
                  color: '#FF3C11',
                }}
              >
                중복된 아이디입니다.
              </p>
            </React.Fragment>
          )}
        </div>
        <div>
          <input
            type="password"
            id="PW"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => handleInputFocus('password')}
            placeholder="비밀번호"
            required
            style={{ outline: 'none' }}
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPW"
            className="input"
            name="confirmPW"
            value={formData.confirmPW}
            onChange={handleChange}
            onFocus={() => handleInputFocus('confirmPW')}
            placeholder="비밀번호 확인"
            required
            style={{ outline: 'none' }}
          />
        </div>
        <input type="submit" value="회원가입" className="button" id="submit" />
        <div className="bottombox">
          <p>이미 계정이 있으십니까?</p>
          <Link to="/login" style={{ textDecoration: 'none' }} id="go">
            로그인하기
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
