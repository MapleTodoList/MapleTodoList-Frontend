import React, { useState, useEffect } from 'react';
import axios from 'axios';
import arrow from "../assets/icons/expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import arrowDown from "../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

function TodoComponent({ charName }) {
  const [todoData, setTodoData] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [characterName, setCharacterName] = useState(""); // 추가한 부분

  // 이벤트 핸들러 밖에서도 받은 데이터 사용
  useEffect(() => {
    const characterButtonListener = (event) => {
      const receivedCharacterName = event.detail;
      setCharacterName(receivedCharacterName); // 받은 데이터를 상태에 저장
      // 캐릭터 이름을 활용하는 원하는 작업을 수행합니다.
    };

    window.addEventListener("characterButtonClicked", characterButtonListener);

    return () => {
      window.removeEventListener("characterButtonClicked", characterButtonListener);
    };
  }, []); // 한 번만 등록

  const fetchTodoData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/todo/${characterName}`);
      setTodoData(response.data);
    } catch (error) {
      console.error('할 일 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchTodoData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterName]);

  useEffect(() => {
    // Initialize expandedSections with all sections expanded
    const initialExpandedState = {};
    if (todoData) {
      todoData.todoInfo.forEach(info => {
        initialExpandedState[info.section.id] = true;
      });
      setExpandedSections(initialExpandedState);
    }
  }, [todoData]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId]
    }));
  };

  return (
    <div>
      {todoData &&
        todoData.todoInfo.map((info, index) => (
          <div key={index} style={{ marginBottom: "10px"}}>
            <div className='conHeader'>
              <header className='container-row'>
                <h2>{info.section.name}</h2>
                {info.section.reset && (
                  <div>
                    <span
                  style={{
                    backgroundColor: info.section.reset === 'daily' ? '#FDE8E8' : info.section.reset === 'weekly' ? '#E1EFFE' : info.section.reset === 'monthly' ? '#FEF4E1' : 'initial',
                    color: info.section.reset === 'daily' ? '#9B1C1C' : info.section.reset === 'weekly' ? '#1E429F' : info.section.reset === 'monthly' ? '#9F6B1E' : 'initial'
                  }}
                >
                  {info.section.reset === 'daily' ? '일일' : info.section.reset === 'weekly' ? '주간' : info.section.reset === 'monthly' ? '월간' : info.section.reset}
                </span>
                <span
                    style={{
                      backgroundColor: info.section.whenReset === 'monday' ? '#E1EFFE' : info.section.whenReset === 'thursday' ? '#DEF7EC' : info.section.whenReset === 'monthly' ? '#FEF4E1' : 'initial',
                      color: info.section.reset === 'monday' ? '#1E429F' : info.section.reset === 'thursday' ? '#03543F' : info.section.whenReset === 'monthly' ? '#9F6B1E' : 'initial'
                    }}
                  >
                    {info.section.whenReset === 'monday' ? '월' : info.section.whenReset === 'thursday' ? '목' : "" }
                  </span>
                </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ marginLeft: '8px', fontSize: '14px' }}>
                    {info.todos.filter(todo => todo.isClear === 1).length} / {info.todos.length}
                  </p>
                  <div style={{ width: '625px', height: '14px', marginLeft: '8px', backgroundColor: '#F6F6F6', borderRadius: '10px' }}>
                    <div
                      style={{
                        width: `${(info.todos.filter(todo => todo.isClear === 1).length / info.todos.length) * 100}%`,
                        height: '100%',
                        backgroundImage: 'linear-gradient(100deg, #FF442B, #FF7733)',
                      }}
                    ></div>
                  </div>
                </div>
                <button onClick={() => toggleSection(info.section.id)}>
                  <img
                    src={expandedSections[info.section.id] ? arrowDown : arrow}
                    alt="arrow"
                  />
                </button>
              </header>
            </div>
            {expandedSections[info.section.id] && (
              <div className='conContainer'>
                {info.todos.map((todo, todoIndex) => (
                  <div
                    key={todoIndex}
                    className='conItem'
                    style={{ backgroundColor: todo.isClear === 1 ? 'gray' : '#EBEBEB' }}
                  >
                    <p>{todo.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default TodoComponent;
