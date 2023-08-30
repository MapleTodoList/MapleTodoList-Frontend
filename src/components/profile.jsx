import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Content.scss'
import plus from '../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg'
import search from '../assets/icons/search.svg'

function Profile() {
  const handleCharacterButtonClick = (characterName) => {
    const event = new CustomEvent('characterButtonClicked', {
      detail: characterName,
    })
    window.dispatchEvent(event)
    axios
      .get(`http://localhost:3000/info/${characterName}`)
      .then((response) => {
        setCharacterData(response.data)
        console.log(charList)
        console.log('데이터 받은거', response.data)
      })
  }
  const [showNicknameInput, setShowNicknameInput] = useState(false)
  const [showButton, setshowButton] = useState(false)
  const [formData, setFormData] = useState({
    charname: '',
  })
  const [characterData, setCharacterData] = useState(null)
  const [charList, setCharList] = useState([])
  const characterName = formData.charname
  const accessToken = localStorage.getItem('token')

  const charListChange = () => {
    axios
      .post('http://localhost:3000/todo/', { token: accessToken })
      .then((response) => {
        setCharList(response.data)
        if (response.data.length === 0) {
          handlebuttontogle()
        } else {
          setCharList(response.data)
          axios

            .get(`http://localhost:3000/info/${response.data[0].name}`, {
              token: accessToken,
            })
            .then((response) => {
              console.log('Response from backend:', response.data)
              setCharacterData(response.data)
            })
            .catch((error) => {
              console.error('Error sending or fetching data:', error)
            })
        }
      })
  }

  const handlebuttontogle = () => {
    setshowButton(true)
    console.log(setshowButton)
  }

  const handleAddCharacterClick = () => {
    setShowNicknameInput(true)
  }

  const handleInputChange = (event) => {
    setFormData({
      charname: event.target.value,
    })
  }

  const sendCharacterNameToBackend = () => {
    axios

      .get(`http://localhost:3000/info/${characterName}`, {
        token: accessToken,
      })
      .then((response) => {
        console.log('Response from backend:', response.data)
        setCharacterData(response.data)
      })
      .catch((error) => {
        console.error('Error sending or fetching data:', error)
      })
  }

  const handleSearchButtonClick = () => {
    if (formData.charname.trim() !== '') {
      sendCharacterNameToBackend()
    }
  }

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonClick()
    }
  }
  useEffect(() => {
    charListChange() // 컴포넌트 마운트시 charListChange 함수 자동 실행
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setShowNicknameInput(false)
        setFormData({ charname: '' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if (showNicknameInput) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showNicknameInput])

  const handleSelectCharClick = () => {
    setShowNicknameInput(false)
    setshowButton(false)
    console.log(showButton)
    axios.post('http://localhost:3000/todo/character', {
      name: characterName,
      token: accessToken,
    })
  }

  return (
    <div>
      <div className="profilebox container-row">
        <div className="leftbox container-column">
          {showButton ? (
            <button className="nick" onClick={handleAddCharacterClick}>
              <img src={plus} alt="plus" />
              <p>캐릭터 추가</p>
            </button>
          ) : (
            <div className="charater">
              {characterData && (
                <div>
                  <p>{charList[0].name}</p>
                  <p> / </p>
                  <p>{characterData.level}</p>
                </div>
              )}
              {characterData && (
                <img src={characterData.characterUrl} alt="Character" />
              )}
            </div>
          )}
        </div>
        <div className="guide"></div>
        <div className="rightbox container-column">
          <div className="high container-row">
            <div className="item">
              <p>월드</p>
              {characterData && (
                <p style={{ color: '#FF842B' }}>{characterData.world}</p>
              )}
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="low container-row">
            <div className="item">
              <p>길드</p>
              {characterData && <p>{characterData.guild}</p>}
            </div>
            <div className="item">
              <p>종합랭킹</p>
              {characterData && <p>{characterData.lanking}</p>}
            </div>
            <div className="item">
              <p>월드랭킹</p>
              {characterData && <p>{characterData.worldLanking}</p>}
            </div>
            <div className="item">
              <p>직업랭킹</p>
              {characterData && <p>{characterData.jobLanking}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="select">
        {charList.map((char) => (
          <button
            key={char.name}
            onClick={() => {
              handleCharacterButtonClick(char.name)
            }}
          >
            {char.name}
          </button>
        ))}
        <button>
          <img src={plus} alt="추가" onClick={handleAddCharacterClick} />
        </button>
      </div>
      {showNicknameInput && (
        <div className="backdrop">
          <div className="nickname-input">
            <input
              type="text"
              placeholder="캐릭터이름을 검색하세요"
              value={formData.charname}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            {formData.charname.trim() !== '' && (
              <button onClick={handleSearchButtonClick}>
                <img src={search} alt="검색" />
              </button>
            )}
          </div>
          {handleAddCharacterClick && (
            <div>
              {characterData && (
                <div className="selectchar" onClick={handleSelectCharClick}>
                  <img src={characterData.characterUrl} alt="Character" />
                  <ul>
                    <li>Level: {characterData.level}</li>
                    <li>Nick: {formData.charname}</li>
                    <li>World: {characterData.world}</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Profile
