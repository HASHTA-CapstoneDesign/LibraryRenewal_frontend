import React, { useState } from "react";
import styled from "styled-components";
import img from "./csquare_img.PNG";

const Title = styled.h1`
  text-align: center;
`;

const OuterDiv = styled.div`
  margin: 20px;
`;

const RightDiv = styled.div`
  width: 480px;
`;

const ContentsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TextLinkDiv = styled.div`
  padding: 20px;
  text-align: center;
`;

const Explain = styled.div`
  height: 250px;
  padding: 10px;
  margin-left: 20px;
  background-color: #ebeced;
`;

const TextLink = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: ${(props) => (props.isActive ? "blue" : "black")};
  &:hover {
    text-decoration: underline;
  }
`;

const RoomExplainDiv = styled.div`
  margin-top: 50px;
  text-align: center;
`;

function Csquare() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container'>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <OuterDiv>
        <Title>C.square</Title>
        <ContentsDiv>
          <img src={img} alt="csquare_img" style={{ width: '500px', height: '350px' }} />
          <RightDiv>
            <Explain>
              - 창의 협업 및 연구, 학습, 창업활동이 가능한 융복합 공간 <br />
              <br />
              ※ 유의사항 <br />
              <br />
              - 1주일 이전부터 예약 가능 <br />
              - 1일 최대 3시간 <br />
              - 사용 인원 시간 및 이용 목적 준수 <br />
              - 음식물 반입 금지 <br />
              - 퇴실 시 자리 정돈 <br />
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가) <br />
              <br />
            </Explain>
            <TextLinkDiv>
              <TextLink
                isActive={selectedOption === "Amber Orange"}
                onClick={() => handleOptionClick("Amber Orange")}
              >
                Amber Orange
              </TextLink>
              | &nbsp;
              <TextLink
                isActive={selectedOption === "Coral Orange"}
                onClick={() => handleOptionClick("Coral Orange")}
              >
                Coral Orange
              </TextLink>
              | &nbsp;
              <TextLink
                isActive={selectedOption === "Neon Orange"}
                onClick={() => handleOptionClick("Neon Orange")}
              >
                Neon Orange
              </TextLink>
              <br />
              <TextLink
                isActive={selectedOption === "Sienna Orange"}
                onClick={() => handleOptionClick("Sienna Orange")}
              >
                Sienna Orange
              </TextLink>
              | &nbsp;
              <TextLink
                isActive={selectedOption === "Green"}
                onClick={() => handleOptionClick("Green")}
              >
                Green
              </TextLink>
              | &nbsp;
              <TextLink
                isActive={selectedOption === "Violet"}
                onClick={() => handleOptionClick("Violet")}
              >
                Violet
              </TextLink>
            </TextLinkDiv>
          </RightDiv>
        </ContentsDiv>
        {selectedOption && (
          <RoomExplainDiv>
            {selectedOption === "Amber Orange" && (
              <>
                <strong>Amber Orange</strong>
                <br />
                사용인원: 2~4명 입실 가능
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
            {selectedOption === "Coral Orange" && (
              <>
                <strong>Coral Orange</strong>
                <br />
                사용인원: 2~4명 입실 가능
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
            {selectedOption === "Neon Orange" && (
              <>
                <strong>Neon Orange</strong>
                <br />
                사용인원: 최대 8~10명 입실 가능
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
            {selectedOption === "Sienna Orange" && (
              <>
                <strong>Sienna Orange</strong>
                <br />
                사용인원: 최대 8명 입실 가능
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
            {selectedOption === "Green" && (
              <>
                <strong>Green</strong>
                <br />
                영상 제작 스튜디오
                <br />
                동영상 제작 Software 사용 가능
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
            {selectedOption === "Violet" && (
              <>
                <strong>Violet</strong>
                <br />
                매체 편집/제작실
                <br />
                매체 편집/제작 Software 설치
                <br />
                매체 편집/제작
                <br />
                설치 Software
                <br />
                - Windows, MAC OS
                <br />
                <br />
                - 평일: 09:00 ~ 21:50
                <br />
                - 토.일요일(공휴일 포함): 13:00 ~ 18:50
              </>
            )}
          </RoomExplainDiv>
        )}
      </OuterDiv>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
    </div>
  );
}

export default Csquare;
