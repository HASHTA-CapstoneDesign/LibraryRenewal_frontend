import styled from 'styled-components';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import Container from '../components/Container';
import MyLoanList from '../components/myPage/MyLoanList';
import MyLoanHistory from '../components/myPage/MyLoanHistory';
import MyReserveList from '../components/myPage/MyReserveList';

const ContainerBox = styled(Container)`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: var(--main-font-color);
  margin-top: 8rem;
  margin-bottom: 18rem;

  .tap-container {
    display: flex;
    // justify-content: flex-start;
    width: 45%;
    height: 5%;
    margin-bottom: 2.5rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const TabLink = styled(Link)`
  background-color: #ffffff;
  width: 10rem;
  border: 1px solid #858585;
  text-align: center;
  /* border-radius: 5px; */
  height: 1.5rem;
  color: black;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #00a4c3;
    color: white;
  }
`;

const MyLoanPage = () => {
  const { pathname } = useLocation();

  return (
    <div className='container'>
    <div className="space-for-nav" style={{ height: "4rem" }}></div>
    <div className="space-for-nav" style={{ height: "4rem" }}></div>
    <ContainerBox>
      <Title>대출조회/연장/예약</Title>
      <div className="tap-container">
        <TabLink
          className={
            pathname === 'myloan' || pathname === '/myloan/list' ? 'focus' : ''
          }
          to="list"
        >
          대출현황
        </TabLink>
        <TabLink
          className={pathname === '/myloan/history' ? 'focus' : ''}
          to="history"
        >
          전체 대출기록
        </TabLink>
        <TabLink
          className={pathname === '/myreserve/list' ? 'focus' : ''}
          to="reserve/list"
        >
          예약확인 및 취소
        </TabLink>
      </div>
      <Routes>
        <Route path="/" element={<MyLoanList />}></Route>
        <Route path="list" element={<MyLoanList />}></Route>
        <Route path="history" element={<MyLoanHistory />}></Route>
        <Route path="reserve/list" element={<MyReserveList />}></Route>
      </Routes>
    </ContainerBox>

      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>

    </div>
  );
};

export default MyLoanPage;
