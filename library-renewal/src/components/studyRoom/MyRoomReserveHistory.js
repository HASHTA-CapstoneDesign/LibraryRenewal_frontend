import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
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
    border: 1px solid #dadcde;
    border-top: 1px solid #a2a6aa;
    border-bottom: 1px solid #a2a6aa;
    color: black;
    padding: 0 14px;
  }

  .col-title {
    text-align: center;
  }

  .table-title {
    background-color: #f4f6f9;
    font-weight: bold;
  }

  .cancel-box {
    margin: auto;
    width: 6rem;
    height: 2.5rem;
    text-align: center;
    margin-top: 26px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: black;

    .cancel-btn {
      display: block;
      line-height: 2.5rem;
    }
  }
`;

const ExtensionBtn = styled.button`
  display: block;
  margin: auto;
  width: 5rem;
  height: 2rem;
  background-color: #4859a6;
  color: #ffffff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`;

const MyRoomReserveHistory = () => {
  const [data, isLoading, error] = useFetch(
    `http://34.64.215.230:8080/api/reserve/room/1`
  );

  let myList;
  if (data) {
    myList = data.response;
  }

  return (
    <Container>
      <h3>총 2건</h3>
      <div className="reserve-list">
        <table>
          <tbody>
            <tr className="table-title">
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title place">이용시설</td>
              <td className="col-title use-date">예약일</td>
              <td className="col-title use-time">이용시간</td>
              <td className="col-title use-time">예약상태</td>
            </tr>
            {isLoading && <div>로딩중</div>}
            {data && (
              <>
                {data.dtoList.map((item) => (
                  <tr>
                    <td className="col-title">
                      <input type="checkbox" id="room-checkbox" />
                    </td>
                    <td className="col-title place">
                      2층 스터디룸 / {item.roomName}
                    </td>
                    <td className="col-title use-date">{item.creDate}</td>
                    <td className="col-title use-time">{item.useTimes[0]}</td>
                    <td className="col-title use-time">{item.roomReserve}</td>
                  </tr>
                ))}
              </>
            )}
            {/*<tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title no">1</td>
              <td className="col-title place">2층 스터디룸 / 17212호실</td>
              <td className="col-title use-date">2023-05-17</td>
              <td className="col-title use-time">15:00~16:00</td>
              <td className="col-title delete">취소</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title no">2</td>
              <td className="col-title place">4층 C-Square / 17212호실</td>
              <td className="col-title use-date">2023-05-18</td>
              <td className="col-title use-time">15:00~16:00</td>
              <td className="col-title delete">취소</td>
            </tr>*/}
          </tbody>
        </table>
      </div>
      {/*<div className="cancel-box">
        <div className="cancel-btn">
          <button>신청 취소</button>
        </div>
          </div>*/}
      <ExtensionBtn>예약 취소</ExtensionBtn>
    </Container>
  );
};

export default MyRoomReserveHistory;
