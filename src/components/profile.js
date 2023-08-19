import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Content.scss";
import plus from "../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg";
import search from "../assets/icons/search.svg";

function Profile() {
  const [showNicknameInput, setShowNicknameInput] = useState(false);
  const [formData, setFormData] = useState({
    charname: "",
  });
  const [characterData, setCharacterData] = useState(null);
  const characterName = formData.charname;
  const accessToken = localStorage.getItem("token");
  const handleAddCharacterClick = () => {
    setShowNicknameInput(true);
  };

  const handleInputChange = (event) => {
    setFormData({
      charname: event.target.value,
    });
  };

  const sendCharacterNameToBackend = () => {
    console.log(localStorage.token)

    axios
    
      .get(`http://localhost:3000/info/${characterName}`
        ,
        { token: accessToken },
      )
      .then((response) => {
        console.log("Response from backend:", response.data);
        setCharacterData(response.data);

      })
      .catch((error) => {
        console.error("Error sending or fetching data:", error);
      });
  };

  const handleSearchButtonClick = () => {
    if (formData.charname.trim() !== "") {
      sendCharacterNameToBackend();
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchButtonClick();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setShowNicknameInput(false);
        setFormData({ charname: "" });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    
    if (showNicknameInput) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNicknameInput]);

  const handleSelectCharClick = () => {
    setShowNicknameInput(false);
    axios
    .post("http://localhost:3000/todo/character"
        ,
        { name: characterName, token: accessToken },);
  };
  

    return(
        <div>
            <div className="profilebox container-row">
                <div className="leftbox container-column">
                    <button className="nick" onClick={handleAddCharacterClick}>
                        <img src={plus} alt="plus"/>
                        <p>캐릭터 추가</p>
                    </button>
                    <div className="charater">
                    </div>
                </div>
                <div className="guide"></div>
                <div className="rightbox container-column">
                    <div className="high container-row">
                        <div className="item">
                            <p>월드</p>
                            <p style={{ color:"#FF842B"}}>리부트</p>
                        </div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="low container-row">
                        <div className="item">
                            <p>길드</p>
                            <p>AriaStory</p>
                        </div>
                        <div className="item">
                            <p>종합랭킹</p>
                            <p>1위</p>
                        </div>
                        <div className="item">
                            <p>월드랭킹</p>
                            <p>1위</p>
                        </div>
                        <div className="item">
                            <p>직업랭킹</p>
                            <p>1위</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="select">
                <button>숭늉v</button>
                <div style={{ width:"0.5px", height:"100%", backgroundColor:"#000"}}></div>
                <button>숭늉섀도어</button>
                <button>불독숭늉</button>
                <button>
                    <img src={plus} alt="plus"/>
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
            {formData.charname.trim() !== "" && (
              <button onClick={handleSearchButtonClick}>
                <img src={search} alt="검색" />
              </button>
            )}
          </div>
          {handleAddCharacterClick && (
            <div>
                {characterData &&(
                <div className="selectchar" onClick={handleSelectCharClick}>
                    <img src={characterData.characterUrl} alt="Character"/>
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