import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/SignupAuth.scss'
import mark from '../assets/icons/error_FILL0_wght400_GRAD0_opsz48.svg'

function Signup() {
  const [formData, setFormData] = useState({
    ID: '',
    PW: '',
    confirmPW: '',
  })

  const [isDuplicateID, setIsDuplicateID] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setIsDuplicateID(false)
  }

  const handleInputFocus = (name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: '',
    }))
    setIsDuplicateID(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()//이벤트 객체의 기본 동작을 취소하는 메소드 form을 제출했을 때 페이지가 새로고침되는 것을 방지
    // 중복된 아이디가 있다고 가정
    // 여기서 서버에 아이디 중복 여부를 확인
    setIsDuplicateID(false)//<--false:아이디 중복(X) true:아이디 중복(O)
    console.log('Form data submitted:', formData)
    if (formData.PW !== formData.confirmPW) {
      alert('비밀번호가 일치하지 않습니다.')
    }
    else if (!isDuplicateID) {
      alert("회원가입이 완료되었습니다.")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="mainbox">
        <h1 id="go" style={{ fontSize: '40px' }}>
          회원가입
        </h1>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            id="ID"
            className="input"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
            onFocus={() => handleInputFocus('ID')} // Handle input focus event
            placeholder={formData.ID ? formData.ID : '아이디'} // Use state value for placeholder
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
              {/* Apply color #FF3C11 to the message */}
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
            name="PW"
            value={formData.PW}
            onChange={handleChange}
            onFocus={() => handleInputFocus('PW')} // Handle input focus event
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
            onFocus={() => handleInputFocus('confirmPW')} // Handle input focus event
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
