import React from "react";
import FlexBoxComponent from "../components/test";

function contents({ data }) {
    const Dailycontent = [
        { key: "데일리 기프트" },
        { key: "몬스터 파크" },
        { key: "마일리지 정립" },
        { key: "유니온 코인" },
        { key: "더 시드" },
      ];
    
      const Dailyboss = [
        { name: "우르스"},
        { name: "자쿰"},
        { name: "매그너스"},
        { name: "힐라"},
        { name: "카웅"},
        { name: "파폴라투스"},
        { name: "루타비스"},
        { name: "반 레온"},
        { name: "혼테일"},
        { name: "아카이럼"},
        { name: "핑크빈"},
    
        
      ];

      const Dailysymbol = [
        { name: "소멸의 여로"},
        { name: "츄츄 아일랜드"},
        { name: "레헬른"},
        { name: "아르카나"},
        { name: "모라스"},
        { name: "에스페라"},
        { name: "세르니움"},
        { name: "아르크스"},
        { name: "오디움"},
        { name: "도원경"},
    
        
      ];

      const Weeklysymbol = [
        { name: "에르다 스펙트럼" },
        { name: "배고픈 무토" },
        { name: "미드나잇 체이서" },
        { name: "스피릿 세이비어" },
        { name: "엔하임 디펜스" },
        { name: "프로텍트 에스페라" },
      ];

      const Weeklycontents = [
        { name: "무릉 도장" },
        { name: "플레그 레이스" },
        { name: "지하 수로" },
        { name: "야영지 주간 임무" },
        { name: "헤이븐 주간 임무" },
      ];

      const Weeklyboss = [
        { name: "자쿰" },
        { name: "메그너스" },
        { name: "힐라" },
        { name: "파풀라투스" },
        { name: "피에르" },
        { name: "반반" },
        { name: "블러디 퀸" },
        { name: "벨룸" },
        { name: "핑크빈" },
        { name: "시그너스" },
        { name: "스우" },
        { name: "데미안" },
        { name: "가디언 엔젤 슬라임" },
        { name: "루시드" },
        { name: "윌" },
        { name: "거대 괴수 더스크" },
        { name: "진 힐라" },
        { name: "친위대장 듄켈" },
        { name: "선택받은 세렌" },
        { name: "감시자 칼로스" },
        { name: "카링" },
      ];

      const Monthlyboss = [
        { name: "검은 마법사" },
      ];

      const Custom1 = [
      ];
      return (
        <div>
          <FlexBoxComponent data={Dailycontent} title={"일일 컨텐츠"} progressMax={Dailycontent.length} />
          <FlexBoxComponent data={Dailyboss} title={"일일 보스"} progressMax={Dailyboss.length} />
          <FlexBoxComponent data={Dailysymbol} title={"일일 심볼"} progressMax={Dailysymbol.length} />
          <FlexBoxComponent data={Weeklysymbol} title={"주간 심볼"} progressMax={Weeklysymbol.length} />
          <FlexBoxComponent data={Weeklycontents} title={"주간 컨텐츠"} progressMax={Weeklycontents.length} />
          <FlexBoxComponent data={Weeklyboss} title={"주간 보스"} progressMax={Weeklyboss.length} />
          <FlexBoxComponent data={Monthlyboss} title={"월간 보스"} progressMax={Monthlyboss.length} />
          <FlexBoxComponent data={Custom1} title={"Custom1"}/>
        </div>
      );
}

export default contents