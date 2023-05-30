import styled from 'styled-components';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import Container from '../components/Container';
import StudyRoomReserve from '../components/studyRoom/StudyRoomReserve';
import StudyRoomReserve2 from '../components/studyRoom/StudyRoomReserve2';
import MyRoomReserveHistory from '../components/studyRoom/MyRoomReserveHistory';
import { useState, useEffect } from 'react';
import { convertDate } from '../utils/dateConvert';

const ContainerBox = styled.div`
  background-color: #ffffff;
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding-top: 3rem;
  padding-bottom: 3rem;
  color: var(--main-font-color);
  margin-bottom: 12rem;
`;

const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: red;

  .tap-container {
    //display: inline-box;
    //justify-content: flex-start;
    //width: 45%;
    //height: 10%;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 26px;
  color: black;
  background-color: #f5f7fa;
  padding: 18px 0;
  font-weight: 600;
`;

const TabLink = styled(Link)`
  background-color: #ffffff;
  width: 10rem;
  border: 1px solid #858585;
  text-align: center;
  padding: 8px;
  margin: 0 6px;
  border-radius: 5px;
  height: 1.5rem;
  color: black;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #00a4c3;
    color: white;
  }
`;

const StudyRoomReservePage = () => {
  const { pathname } = useLocation();

  const [currentLastUrl, setCurrentLastUrl] = useState('floor1');

  // const todayDate = convertDate(new Date());
  const todayDate = '2023-05-28';

  useEffect(() => {
    const url = pathname;
    const splitUrl = url.split('/');
    const location = splitUrl[splitUrl.length - 1];
    setCurrentLastUrl(location);
  });

  return (
    <ContainerBox>
      <Title>시설 예약</Title>
      <TapContainer>
        <div className="tap-container first">
          <TabLink
            className={
              pathname === 'studyroom/reserve' ||
              pathname === '/studyroom/reserve/list'
                ? 'focus'
                : ''
            }
            to="list"
          >
            시설예약
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/history' ? 'focus' : ''}
            to="history"
          >
            시설 예약현황
          </TabLink>
        </div>
        <div className="tap-container second">
          <TabLink
            className={pathname === '/studyroom/reserve/floor1' ? 'focus' : ''}
            to="floor1"
          >
            2층 스터디룸
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/floor2' ? 'focus' : ''}
            to="floor2"
          >
            3층
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/floor3' ? 'focus' : ''}
            to="floor3"
          >
            4층 (디지털 스터디룸)
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/floor4' ? 'focus' : ''}
            to="floor4"
          >
            4층 C.Square
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/floor5' ? 'focus' : ''}
            to="floor5"
          >
            5층
          </TabLink>
        </div>
      </TapContainer>
      <Routes>
        <Route path="/" element={<StudyRoomReserve2 />}></Route>
        <Route path="list" element={<StudyRoomReserve2 />}></Route>
        <Route path="history" element={<MyRoomReserveHistory />}></Route>
        <Route
          path="floor1"
          element={
            <StudyRoomReserve
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          }
        ></Route>
        <Route
          path="floor2"
          element={
            <StudyRoomReserve
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          }
        ></Route>
        <Route
          path="floor3"
          element={
            <StudyRoomReserve
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          }
        ></Route>
        <Route
          path="floor4"
          element={
            <StudyRoomReserve
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          }
        ></Route>
        <Route
          path="floor5"
          element={
            <StudyRoomReserve
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          }
        ></Route>
      </Routes>
    </ContainerBox>
  );
};

export default StudyRoomReservePage;
