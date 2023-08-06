import React, { useState } from "react";
import arrow from "../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import arrowDown from "../assets/icons/expand_less_FILL0_wght400_GRAD0_opsz48.svg";

const FlexBoxComponent = ({ data, title }) => {
  const [showContainer, setShowContainer] = useState(true);
  const progress = data.length; // 데이터 배열의 길이를 기반으로 진행 상태를 계산합니다.

  console.log(data.length);
  const toggleContainer = () => {
    setShowContainer((prevShowContainer) => !prevShowContainer);
  };

  return (
    <div>
      <div className="conHeader">
        <header className="container-row">
          <div>
            <p>{title}</p>
            <span>일일</span>
          </div>
          <div>
            <p>{`${progress}/${data.length}`}</p>
            <div
              style={{
                width: "625px",
                height: "14px",
                backgroundColor: "orange",
                borderRadius: "10px",
              }}
            >
            </div>
            <button onClick={toggleContainer}>
              <img
                src={showContainer ? arrow : arrowDown}
                alt="arrow"
              />
            </button>
          </div>
        </header>
      </div>
      {showContainer && (
        <div className="conContainer">
          {data.map((item, index) => (
            <div key={index} className="conItem">
              {Object.keys(item).map((key) => (
                <div key={key}>{item[key]}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlexBoxComponent;
