import React from "react"
import "../styles/Content.scss"
import character from "../assets/img/profile.svg"
import plus from "../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg"

function profile() {
    return(
        <div>
            <div className="profilebox container-row">
                <div className="leftbox container-column">
                    <div className="nick">
                        <img src={character} alt="profile"/>
                    </div>
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
        </div>
    )
}

export default profile