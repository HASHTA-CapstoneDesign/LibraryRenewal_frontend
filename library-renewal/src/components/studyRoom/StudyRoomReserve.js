import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import StudyRoomCard from './StudyRoomCard';
import { useState, useEffect } from 'react';
import { convertDate } from '../../utils/dateConvert';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
  width: 60%;

  .loan-list {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
  }
`;

const Notification = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

  .noti-title {
    font-weight: 600;
  }

  span {
    display: block;
    color: black;
  }
`;

const RoomContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  margin-top: 16px;
  border-radius: 5px;

  span {
    color: black;
  }
`;

const RoomNo = styled.div`
  background-color: #848484;
  height: 3rem;
  color: #ffffff;

  span {
    line-height: 3rem;
    padding-left: 1.5rem;
    font-size: 18px;
  }
`;

const RoomContent = styled.div`
  height: 20rem;
  padding: 10px;

  .room-info {
    display: flex;

    .room-pic {
      background-color: #cacac8;
      width: 25%;
      height: 9rem;
    }

    .room-noti {
      background-color: #eeeeee;
      width: 75%;
      padding: 10px 0 0 10px;
      margin-left: 10px;

      span {
        display: block;
      }
    }
  }

  .room-reservation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;

    button {
      width: 6.5rem;
      height: 4rem;
      background-color: #e1f6fc;
      text-align: center;
      border: 1px solid #049fff;
      margin-right: 10px;

      span:first-child {
        font-weight: 500;
      }

      :hover {
        background-color: #779acf;

        span {
          color: #ffffff;
        }
      }

      :focus {
        background-color: #1872be;

        span {
          color: #ffffff;
        }
      }
    }

    span {
      display: block;
    }
  }

  .reserve-box {
    margin: auto;
    width: 5rem;
    height: 2.5rem;
    text-align: center;
    margin-top: 26px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: black;

    .reserve-btn {
      display: block;
      line-height: 2.5rem;
    }
  }
`;

const StudyRoomReserve = ({ currentLastUrl, todayDate }) => {
  const { pathname } = useLocation();

  console.log('currentLastUrl ', currentLastUrl);
  /*const [currentLastUrl, setCurrentLastUrl] = useState(null);

  const todayDate = convertDate(new Date());

  useEffect(() => {
    const url = pathname;
    const splitUrl = url.split('/');
    const location = splitUrl[splitUrl.length - 1];
    setCurrentLastUrl(location);
  });*/

  const [data, isLoading, error] = useFetch(
    `http://34.64.215.230:8080/api/room?floor=${currentLastUrl}&data=2023-05-28`
  );

  let roomList;
  if (data) {
    roomList = data.response;
  }

  return (
    <Container>
      <Notification>
        {pathname === '/studyroom/reserve' ||
        pathname === '/studyroom/reserve/list' ||
        pathname === '/studyroom/reserve/floor1' ||
        pathname === '/studyroom/reserve/floor2' ? (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        ) : pathname === '/studyroom/reserve/floor3' ? (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>- 방학기간: 2층 스터디룸만 개방</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
            <br />
            <span>- 모바일 기기와 TV를 연결하여 사용 가능</span>
            <span>- 유의사항 및 사용시간, 인원은 다른 층 스터디룸과 동일</span>
            <span>- 연결기기 사용은 4층 C-Square 데스크로 문의</span>
          </>
        ) : pathname === '/studyroom/reserve/floor4' ? (
          <>
            <span>
              - 창의 협업 및 연구, 학습, 창업활동이 가능한 융복합 공간
            </span>
            <br />
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원 및 시간, 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        ) : (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>- 방학기간에는 2층 스터디룸만 개방</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        )}
      </Notification>
      {error && <div>시설 리스트 조회 실패</div>}
      {isLoading && <div>로딩중</div>}
      {data && (
        <>
          {data.map((item) => (
            <StudyRoomCard
              key={item.id}
              // item={item}
              roomList={item}
              currentLastUrl={currentLastUrl}
              todayDate={todayDate}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default StudyRoomReserve;
