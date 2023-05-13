/**
 * 문제 리스트
 * {
 *    id: number, 문제의 고유값
 *    title: string, 문제 ex) 어디에서 난 사고인가요?
 *    type: string, 문제 유형 ex) radio(하나만 선택), checkbox(여러개 선택), input(그냥 입력), file(사진) ...
 *    candidates: string[], type이 radio 혹은 checkbox일때 보기들
 *    parentId: number, 상위 문제 고유값
 *    parentAnswer: any 상위 문제 답
 * }[]
 */
const questionList = [
  {
    id: 1,
    title: "어떤 사고인지 알려주세요.",
    type: "radio",
    candidate: ["자동차와 자동차", "고속도로", "자동차와 사람", "자동차와 오토바이", "자동차대 자전거"],
    parentId: null, // 가장 첫 질문이기 때문에 상위 문제가 없음
    parentAnswer: null
  },
  {
    id: 12,
    title: "사고 장소(차도유형)는 어디였나요?",
    type: "radio",
    candidate: ["직선도로", "사거리 교차로(신호등 없음)", "사거리 교차로(신호등 있음)", "T자형 교차로", "차도와 차도가 아닌 장소", "주차장", "회전 교차로"],
    parentId: 1,
    parentAnswer: "자동차와 자동차"
  },
  {
    id: 121,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["추돌 사고", "차로 합류 도로", "열린 문 접촉 사고", "역주행 사고(중앙선 침범)", "이면도로 교행사고", "추월 사고", "차로변경(진로변경)", "안전지대 통과 사고", "정차 후 출발 사고", "긴급 자동차 사고"],
    parentId: 12,
    parentAnswer: "직선도로"
  },
  {
    id: 1211,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 자동차(1차 사고차량)를 추돌", "후행 추돌", "주(정)차"],
    parentId: 121,
    parentAnswer: "추돌 사고"
  },
  {
    id: 12111,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 자동차(1차 사고차량)"],
    parentId: 1211,
    parentAnswer: "선행 자동차(1차 사고차량)를 추돌"
  },
  {
    id: 121111,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 245 A80:B20"],
    parentId: 12111,
    parentAnswer: "선행 자동차(1차 사고차량)"
  },
  {
    id: 1212,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["본선에서 직진"],
    parentId: 121,
    parentAnswer: "차로 합류 도로"
  },
  {
    id: 12121,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["차로 감소 도로에서 본선으로 합류"],
    parentId: 1212,
    parentAnswer: "본선에서 직진"
  },
  {
    id: 121211,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 246 A40:B60"],
    parentId: 12121,
    parentAnswer: "차로 감소 도로에서 본선으로 합류"
  },
  {
    id: 1213,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["후행 직진"],
    parentId: 121,
    parentAnswer: "열린 문 접촉사고"
  },
  {
    id: 12131,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행자동차(정차중 문열림)"],
    parentId: 1213,
    parentAnswer: "후행 직진"
  },
  {
    id: 121311,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 248 A20:B80"],
    parentId: 12131,
    parentAnswer: "선행자동차(정차중 문열림)"
  },
  {
    id: 1214,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진"],
    parentId: 121,
    parentAnswer: "역주행 사고(중앙선 침범)"
  },
  {
    id: 12141,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["중앙선 침범 직진"],
    parentId: 1214,
    parentAnswer: "직진"
  },
  {
    id: 121411,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 249 A0:B100"],
    parentId: 12141,
    parentAnswer: "중앙선 침범 직진"
  },
  {
    id: 1215,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["(마주보며)직진"],
    parentId: 121,
    parentAnswer: "이면도로 교행사고"
  },
  {
    id: 12151,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["(마주보며)직진"],
    parentId: 1215,
    parentAnswer: "(마주보며)직진"
  },
  {
    id: 121511,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 249-1 A50:B50"],
    parentId: 12151,
    parentAnswer: "(마주보며)직진"
  },
  {
    id: 1216,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 직진","중앙선 침범 추월(후방)", "실선 추월"],
    parentId: 121,
    parentAnswer: "추월 사고"
  },
  {
    id: 12161,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["추월(실선 중앙선)", "급접거리 추월(점선 중앙선)"],
    parentId: 1216,
    parentAnswer: "선행 직진"
  },
  {
    id: 121611,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 250 A0:B100"],
    parentId: 12161,
    parentAnswer: "추월(실선 중앙선)"
  },
  {
    id: 121612,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 251 A0:B100"],
    parentId: 12161,
    parentAnswer: "급접거리 추월(점선 중앙선)"
  },
  {
    id: 12162,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["추월(실선 중앙선)", "급접거리 추월(점선 중앙선)"],
    parentId: 1216,
    parentAnswer: "선행 직진"
  },
  {
    id: 121621,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 250 A0:B100"],
    parentId: 12162,
    parentAnswer: "중앙선 침범 추월(전방)"
  },
  {
    id: 121622,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 251 A0:B100"],
    parentId: 12162,
    parentAnswer: "급접거리 추월(점선 중앙선)"
  },
  {
    id: 12163,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["중앙선 침범 추월(전방)"],
    parentId: 1216,
    parentAnswer: "중앙선 침범 추월(후방)"
  },
  {
    id: 121631,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 250-1 A60:B40"],
    parentId: 12163,
    parentAnswer: "중앙선 침범 추월(전방)"
  },
  {
    id: 12164,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 직진"],
    parentId: 1216,
    parentAnswer: "실선 추월"
  },
  {
    id: 121641,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252-1 A100:B0"],
    parentId: 12164,
    parentAnswer: "선행 직진"
  },
  {
    id: 1217,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["후행 직진","동시 차로변경(진로변경)", "정체차로에서 대기 중 진로변경(측면 충돌)"],
    parentId: 121,
    parentAnswer: "차로변경(진로변경)"
  },
  {
    id: 12171,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 진로변경"],
    parentId: 1217,
    parentAnswer: "후행 직진"
  },
  {
    id: 121711,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252 A30:B70"],
    parentId: 12171,
    parentAnswer: "선행 진로변경"
  },
  {
    id: 12172,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["동시 차로변경(진로변경)"],
    parentId: 1217,
    parentAnswer: "동시 차로변경(진로변경)"
  },
  {
    id: 121721,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252-2 A50:B50"],
    parentId: 12171,
    parentAnswer: "동시 차로변경(진로변경)"
  },

  {
    id: 12173,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진(측면 충돌)"],
    parentId: 1217,
    parentAnswer: "정체차로에서 대기 중 진로변경(측면 충돌)"
  },
  {
    id: 121731,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252-3 A100:B0"],
    parentId: 12171,
    parentAnswer: "직진(측면 충돌)"
  },
  {
    id: 1218,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["후행 직진(안전지대 벗어나기 전)","후행 직진(안전지대 벗어난 후)"],
    parentId: 121,
    parentAnswer: "안전지대 통과 사고"
  },
  {
    id: 12181,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 진로변경"],
    parentId: 1218,
    parentAnswer: "후행 직진(안전지대 벗어나기 전)"
  },
  {
    id: 121811,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252-4 A100:B00"],
    parentId: 12181,
    parentAnswer: "선행 진로변경"
  },
  {
    id: 12182,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 진로변경"],
    parentId: 1218,
    parentAnswer: "후행 직진(안전지대 벗어난 후)"
  },
  {
    id: 121821,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 252-4 A70:B30"],
    parentId: 12182,
    parentAnswer: "선행 진로변경"
  },
  {
    id: 1219,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["정차 후 출발"],
    parentId: 121,
    parentAnswer: "정차 후 출발 사고"
  },
  {
    id: 12191,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["추월"],
    parentId: 1219,
    parentAnswer: "정차 후 출발"
  },
  {
    id: 121911,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 257 A80:B20"],
    parentId: 12191,
    parentAnswer: "추월"
  },
  {
    id: 1210,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진", "후행 직진", "선행 직진", "선행 진로변경"],
    parentId: 121,
    parentAnswer: "긴급 자동차 사고"
  },
  {
    id: 12101,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["중앙선 왼쪽 통행(긴급자동차)"],
    parentId: 1210,
    parentAnswer: "직진"
  },
  {
    id: 121011,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 268 A60:B40"],
    parentId: 12101,
    parentAnswer: "중앙선 왼쪽 통행(긴급자동차)"
  },
  {
    id: 12102,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["선행 진로변경(긴급자동차)"],
    parentId: 1210,
    parentAnswer: "후행 직진"
  },
  {
    id: 121021,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 272 A90:B10"],
    parentId: 12102,
    parentAnswer: "선행 진로변경(긴급자동차)"
  },
  {
    id: 12103,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["추월(긴급자동차)"],
    parentId: 1210,
    parentAnswer: "선행 직진"
  },
  {
    id: 121031,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 271 A60:B40"],
    parentId: 12103,
    parentAnswer: "추월(긴급자동차)"
  },
  {
    id: 12103,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["후행 직진(긴급자동차)"],
    parentId: 1210,
    parentAnswer: "선행 진로변경"
  },
  {
    id: 121031,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 273 A100:B00"],
    parentId: 12103,
    parentAnswer: "후행 직진(긴급자동차)"
  },










  {
    id: 122,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["동일폭 도로", "대로와 소로", "일시정지 표지가 한쪽 방향에만 있음", "일방통행 표지가 한쪽 방향에만 있음", "교차로 내 진로변경", "2개 차량이 나란히 통행 가능한 차로폭", "좌/우회전 각도가 90도 미만", "2개 차로 동시 우회전", "2개 차로 동시 좌회전", "정차 후 출발사고", "긴급 자동차 사고"],
    parentId: 12,
    parentAnswer: "사거리 교차로(신호등 없음)"
  },
  {
    id: 1221,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["오른쪽에서 직진", "오른쪽에서 직진(후진입)", "오른쪽에서 직진(선진입)", "(마주보며)직진","왼쪽 도로에서 직진", "오른쪽 도로에서 직진", "우회전", "우회전(후진입)", "우회전(선진입)", "오른쪽 도로에서 좌회전"],
    parentId: 122,
    parentAnswer: "동일폭 도로"
  },
  {
    id: 12211,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["왼쪽에서 직진"],
    parentId: 1221,
    parentAnswer: "오른쪽에서 직진"
  },
  {
    id: 122111,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 205, A40:B60"],
    parentId: 12211,
    parentAnswer: "왼쪽에서 직진"
  },
  {
    id: 12212,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["왼쪽에서 직진(선진입)"],
    parentId: 1221,
    parentAnswer: "오른쪽에서 직진(후진입)"
  },
  {
    id: 122121,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 205, A70:B30"],
    parentId: 12212,
    parentAnswer: "왼쪽에서 직진(선진입)"
  },
  {
    id: 12213,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["왼쪽에서 직진(후진입)"],
    parentId: 1221,
    parentAnswer: "오른쪽에서 직진(선진입)"
  },
  {
    id: 122131,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 205, A30:B70"],
    parentId: 12213,
    parentAnswer: "왼쪽에서 직진(후진입)"
  },
  {
    id: 12214,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["(마주보며) 좌회전"],
    parentId: 1221,
    parentAnswer: "(마주보며) 직진"
  },
  {
    id: 122141,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 214, A30:B70"],
    parentId: 12214,
    parentAnswer: "(마주보며) 좌회전"
  },
  {
    id: 12215,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["오른쪽 도로에서 좌회전"],
    parentId: 1221,
    parentAnswer: "왼쪽 도로 에서 직진"
  },
  {
    id: 122151,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 220, A40:B60"],
    parentId: 12215,
    parentAnswer: "오른쪽 도로에서 좌회전"
  },
  {
    id: 12216,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["왼쪽 도로에서 좌회전"],
    parentId: 1221,
    parentAnswer: "오른쪽 도로 에서 직진"
  },
  {
    id: 122161,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 221, A30:B70"],
    parentId: 12216,
    parentAnswer: "왼쪽 도로에서 좌회전"
  },
  {
    id: 12217,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진"],
    parentId: 1221,
    parentAnswer: "우회전"
  },
  {
    id: 122171,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 229, A60:B40"],
    parentId: 12217,
    parentAnswer: "직진"
  },
  {
    id: 12218,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진(선진입)"],
    parentId: 1221,
    parentAnswer: "우회전(후진입)"
  },
  {
    id: 122181,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 229, A70:B30"],
    parentId: 12218,
    parentAnswer: "직진(선진입)"
  },
  {
    id: 12219,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진(후진입)"],
    parentId: 1221,
    parentAnswer: "우회전(선진입)"
  },
  {
    id: 122191,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 229, A40:B60"],
    parentId: 12219,
    parentAnswer: "직진(후진입)"
  },
  {
    id: 12210,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["왼쪽 도로에서 좌회전"],
    parentId: 1221,
    parentAnswer: "오른쪽 도로에서 좌회전"
  },
  {
    id: 122101,
    title: "과실비율은",
    type: "radio",
    candidate: ["도표번호 234, A40:B60"],
    parentId: 12219,
    parentAnswer: "왼쪽 도로에서 좌회전"
  },
  {
    id: 1222,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["대로에서 직진", "대로에서 직진(후진입)", "대로에서 직진(선진입)", "소로에서 직진(좌측도로)","소로에서 직진(우측도로)", "소로에서 우회전", "소로에서 우회전(후진입)", "소로에서 우회전(선진입)", "대로에서 우회전", "대로에서 우회전(후진입)", "대로에서 우회전(선진입)", "소로에서 좌회전"],
    parentId: 122,
    parentAnswer: "대로와 소로"
  },


























  {
    id: 123,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["상대 차량이 측면방향에서 진입", "상대 차량이 맞은편 방향에서 진입", "비보호 좌회전 표지 있음", "신호등이 한쪽차량 방향에만 있음", "교차로 내 진로변경", "추월 사고", "유턴 구역", "정차 후 출발 사고", "노면 표시 위반 사고", "긴급 자동차 사고"],
    parentId: 12,
    parentAnswer: "사거리 교차로(신호등 있음)"
  },
  {
    id: 1231,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["[녹색신호] 직진","[녹색신호] 직진, [적색신호] 충돌", "[황색신호] 직진, [적색신호] 충돌", "[황색신호] 직진", "[적색신호] 직진", "[녹색 좌회전 신호] 좌회전, [적색신호] 충돌","[황색신호] 좌회전, [적색신호] 충돌"],
    parentId: 123,
    parentAnswer: "상대 차량이 측면방향에서 진입"
  },
  {
    id: 12311,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["[적색신호] 직전"],
    parentId: 1231,
    parentAnswer: "[녹색신호] 직진"
  },
  {
    id: 123111,
    title: "과실 비율은",
    type: "radio",
    candidate: ["도표번호 201, A0:B100"],
    parentId: 1231,
    parentAnswer: "[적색신호] 직진"
  },
  {
    id: 124,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["동일폭 도로", "대로와 소로", "일시정지 표지가 한쪽방향에만 있음"],
    parentId: 12,
    parentAnswer: "T자형 교차로"
  },
  {
    id: 1241,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["직진", "왼쪽 도로에서 직진", "오른쪽 도로에서 직진", "오른쪽 도로에서 좌회전"],
    parentId: 124,
    parentAnswer: "동일폭 도로"
  },
  {
    id: 12411,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["우회전"],
    parentId: 1241,
    parentAnswer: "직진"
  },
  {
    id: 124111,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 240-229CO, A30:B70"],
    parentId: 12411,
    parentAnswer: "직진"
  },
  {
    id: 125,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["차도가 아닌 장소에서 차도로 진입", "차도에서 차도가 아닌 장소로 진입"],
    parentId: 12,
    parentAnswer: "차도와 차도가 아닌 장소"
  },
  {
    id: 1251,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["차도에서 직진"],
    parentId: 125,
    parentAnswer: "차도가 아닌 장소에서 차도로 진입"
  },
  {
    id: 12511,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["차도가 아닌 장소에서 중앙선 침범 진입", "차도가 아닌 장소에서 우회전 진입"],
    parentId: 1251,
    parentAnswer: "차도에서 직진"
  },
  {
    id: 125111,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 242, A0:B100"],
    parentId: 12511,
    parentAnswer: "차도가 아닌 장소에서 중앙선 침범 진입"
  },
  {
    id: 125112,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 242, A20:B80"],
    parentId: 12511,
    parentAnswer: "차도가 아닌 장소에서 우회전 진입"
  },
  {
    id: 126,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["주차구역과 통로"],
    parentId: 12,
    parentAnswer: "주차장(또는 차도가 아닌 장소)"
  },
  {
    id: 1261,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["통로 직진"],
    parentId: 126,
    parentAnswer: "주차구역과 통로"
  },
  {
    id: 12611,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["주차구역에서 직진 출차", "주차구역에서 후진 출차"],
    parentId: 1261,
    parentAnswer: "통로 직진"
  },
  {
    id: 126111,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 244, A30:B70"],
    parentId: 12611,
    parentAnswer: "주차구역에서 직진 출차"
  },
  {
    id: 126112,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 242, A25:B75"],
    parentId: 12611,
    parentAnswer: "주차구역에서 후진 출차"
  },
  {
    id: 127,
    title: "사고의 특징은 어떤가요?",
    type: "radio",
    candidate: ["회전차로 1차로형","회전차로 2차로형"],
    parentId: 12,
    parentAnswer: "회전교차로"
  },
  {
    id: 1271,
    title: "자동차 A는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["회전교차로 진입"],
    parentId: 127,
    parentAnswer: "회전차로 1차로형"
  },
  {
    id: 12711,
    title: "자동차 B는 어떻게 진행했나요?",
    type: "radio",
    candidate: ["교차로 내 회전"],
    parentId: 1271,
    parentAnswer: "회전교차로 진입"
  },
  {
    id: 127111,
    title: "과실비율은?",
    type: "radio",
    candidate: ["도표번호 264, A80:B20"],
    parentId: 12711,
    parentAnswer: "교차로 내 회전"
  },
















  {
    id: 3,
    title: "세번째 질문 입니다.",
    candidate: ['value1', 'value2', 'value3', 'value4'],
    type: "checkbox",
    parentId: 2,
  },
  {
    id:4,
    title: "횡단보도 질문입니다.",
    type: "input",
    parentId: 1,
    parentAnswer: "횡단보도"
  },
  {
    id:5,
    title: "차도, 횡단보도를 제외한 나머지에 대한 질문입니다.",
    candidate: ['vvvv1', 'vvvv2', 'vvvv3'],
    parentId: 1,
    type: 'checkbox'
  },
  {
    id:6,
    title: "기타 질문입니다.",
    type: "input",
    parentId: 1,
    parentAnswer: "기타"
  },
];

/**
 * 답변 List
 * {
 *   questionId: number, 문제 id
 *   answer: string | string[] 답변
 * }[]
 */



const answerList = [{questionId: 1, answer: undefined}];
// 가장 첫 문제 id
const rootQuestionId = 1;

//현재 질문 pointer
let currentQuestionCursor = 0;

/**
 * id로 문제 찾기
 * @param id 문제 id
 */
function getQuestionById(id) {
  return questionList.find(element => element.id === id);
}

/**
 * id로 문제 보여주기
 * @param questionId
 * @param answer (Optional) 이미 답변이 있는 경우 넣기
 */
function showQuestion(questionId, answer) {
  const currentQuestion = getQuestionById(questionId);
  let questionBody = '';


  // Generate question elements with unique IDs
  let questionElements = document.getElementsByClassName("question");
  for (let i = 0; i < questionElements.length; i++) {
    let questionElement = questionElements[i];
    let id = questionElement.getAttribute("id");
    let questionID = id;
    questionElement.setAttribute("questionID", questionID);
  }
  
  if (currentQuestion.type === 'radio') {
    questionBody = `
        <div class="question-body">
            ${currentQuestion.candidate.map(element => `
                <div>
                    <input
                    type="radio"
                    name="${currentQuestion.id}"
                    value="${element}"
                    ${answer && answer === element ? `checked="checked"` : ''}/>
                    <label>${element}</label>
                </div>`).join('')}
        </div>
      `
  } else if (currentQuestion.type === 'input') {
    questionBody = `
        <div class="question-body">
            <input
            name="${currentQuestion.id}"
            ${answer && `value="${answer}"`}/>
        </div>
    `
  } else if (currentQuestion.type === 'checkbox') {
    questionBody = `
        <div class="question-body">
            ${currentQuestion.candidate.map(element => `
                <input
                type="checkbox"
                name="${currentQuestion.id}"
                value="${element}"
                ${answer && answer.split(",").includes(element) && `checked="checked"`}
                />
                <label>${element}</label>
            `).join('')}
        </div>
    `
  }
  $("#current-question").html(`
      <div class="question-title">
        ${currentQuestionCursor + 1}. ${currentQuestion.title}
      </div>
      ${questionBody}
    `)
}

function getAnswerValue(questionId) {
  const question = getQuestionById(questionId);
  let value = '';
  if (question.type === 'radio') {
    value = $(`input[name=${question.id.toString()}]:checked`).val();
  } else if (question.type === 'input') {
    value = $(`input[name=${question.id.toString()}]`).val();
  } else if (question.type === 'checkbox') {
    value = $(`input[name=${question.id.toString()}]:checked`).map(function () {
      return $(this).val();
    }).get().join();
  }
  const answerIndex = answerList.findIndex(element => element.questionId === question.id);
  if (answerIndex > -1) {
    answerList[answerIndex].answer = value;
  } else {
    answerList.push({questionId: questionId, answer: value});
  }
  console.log(answerList)
  return value;
}


function generateAnswerListTable(answerList) {
  // 테이블 헤더 생성
  let tableHtml = '<table><thead><tr><th>Question ID</th><th>Answer</th></tr></thead><tbody>';
  
  // answerList 배열 요소를 순회하며 행 추가
  answerList.forEach((element) => {
    tableHtml += `<tr><td>${element.questionId}</td><td>${element.answer}</td></tr>`;
  });

  // 테이블 마무리
  tableHtml += '</tbody></table>';

  return tableHtml;
}




// answerList 형식을 딕셔너리로 변경하는 함수
function convertAnswerListToDict(answerList) {
  let result = [];
  for (let i = 0; i < answerList.length; i++) {
    let dict = {};
    dict['questionId'] = answerList[i][0];
    dict['answer'] = answerList[i][1] || ''; // 빈 문자열 또는 null로 설정
    result.push(dict);
  }
  return result;
}



function submitSurvey() {
  const surveyData = {
    location: convertAnswerListToDict(answerList)
  };

  $.ajax({
    type: 'POST',
    url: '/submit-survey',
    data: JSON.stringify(surveyData),
    contentType: 'application/json',
    success: function (response) {
      console.log(response);
      if (response.error) {
        alert(response.error);
      } else {
        // 서버에서 받은 설문 데이터를 인코딩하여 URL 파라미터로 전달
        var surveyData = encodeURIComponent(JSON.stringify(response));
        // 결과 페이지로 리다이렉트
        window.location.href = '/result';
      }
    },
    error: function (xhr, status, error) {
      alert('설문조사 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });
}



  
function handleImageUpload() {
  const fileInput = $('#image-input').get(0);
  if (fileInput) {
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      $.ajax({
        type: 'POST',
        url: '/submit-image',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          const imageUrl = response.imageUrl;
          const imagePreview = $('#image-preview');
          imagePreview.html(`<img src="${imageUrl}" alt="Uploaded Image" />`);
          
          // 제출하기 버튼이 나타났을 때 다음 버튼 숨기기
          $('#submit-button').show();
          $('#next-btn').hide();
        },
        error: function(xhr, status, error) {
          alert('이미지 업로드 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      });
    } else {
      alert('파일을 선택해주세요.');
    }
  }
}









function getNextQuestion() {
  const lastAnswer = answerList[answerList.length - 1];
  const curQuestion = getQuestionById(lastAnswer.questionId);
  const parentQuestionList = questionList.filter(element => curQuestion.id === element.parentId);
  const hasParentAnswerList = parentQuestionList.filter(element => element.parentAnswer !== undefined); 
  const hasParentAnswer = hasParentAnswerList.find(element => element.parentAnswer === lastAnswer.answer);
  if (hasParentAnswer) {
    return hasParentAnswer;
  }
  return parentQuestionList.find(element => !element.parentAnswer);
}

$(function () {
  // 초기 질문 로드
  const rootQuestionId = 1;
  const initialQuestion = getQuestionById(rootQuestionId);
  answerList[0] = { questionId: rootQuestionId, answer: undefined };
  showQuestion(rootQuestionId);
});


$(function () {
  // 이전 버튼 클릭 이벤트 핸들러
  $("#prev-btn").click(function () {
    if (currentQuestionCursor === 0) {
      alert('첫번째 페이지입니다.');
      return;
    }

    answerList[currentQuestionCursor].answer = getAnswerValue(answerList[currentQuestionCursor].questionId);
    currentQuestionCursor--;

    const answer = answerList[currentQuestionCursor];
    showQuestion(answer.questionId, answer.answer);
  });

  // 다음 버튼 클릭 이벤트 핸들러
  $("#next-btn").click(function () {
    if (
      currentQuestionCursor < answerList.length - 1 &&
      answerList[currentQuestionCursor].answer !==
      getAnswerValue(answerList[currentQuestionCursor].questionId)
    ) {
      const confirmResult = confirm(
        "값이 바뀌면 뒤의 질문들이 바뀔 수 있습니다."
      );
      if (confirmResult) {
        answerList.splice(currentQuestionCursor + 1);
      } else {
        return;
      }
    }

    answerList[currentQuestionCursor].answer = getAnswerValue(
      answerList[currentQuestionCursor].questionId
    );




    
    
    
    if (currentQuestionCursor >= answerList.length - 1) {
      const newQuestion = getNextQuestion();
      if (newQuestion) {
        currentQuestionCursor++;
        answerList.push({ questionId: newQuestion.id, answer: undefined });
        showQuestion(newQuestion.id);
      } else {
        console.log("제출에 진입");
        $('#submit-button').css('display', 'inline-block');
        const submitButton = $('<button>').text('제출하기').attr('id', 'submit-button');
        const fileInput = $('<input>').attr({
          type: 'file',
          id: 'image-upload',
          name: 'image',
        });
    
        if (answerList[currentQuestionCursor].questionId.toString().length === 6) {
          // questionId의 id 값이 6자리인 경우
          $('#current-question').append(fileInput);
        } else {
          const submitButton = $('<button>')
            .text('제출하기')
            .attr('id', 'submit-button');
          $('#current-question').append(submitButton);
        }
    
        // 이미지 업로드 또는 제출 버튼 클릭 이벤트 핸들러 등록
        $('#image-upload').change(handleImageUpload);
        $('#submit-button').click(submitSurvey);
    
        // 버튼 포커스 시 다른 버튼 숨기기
        $('#image-upload').on('focus', function () {
          $('#submit-button').hide();
        });
        $('#submit-button').on('focus', function () {
          $('#image-upload').hide();
        });
      }
    } else {
      currentQuestionCursor++;
      const answer = answerList[currentQuestionCursor];
      showQuestion(answer.questionId, answer.answer);
    }
  });

  $(document).ready(function () {
    const fileInput = $('<input>').attr({
      type: 'file',
      id: 'image-upload',
      name: 'image',
      accept: 'image/jpeg, image/png', // 허용된 이미지 파일 형식
    });
  });

  if (currentQuestionCursor < answerList.length - 1) {
    currentQuestionCursor++;
    const answer = answerList[currentQuestionCursor];
    showQuestion(answer.questionId, answer.answer);
  }
});

