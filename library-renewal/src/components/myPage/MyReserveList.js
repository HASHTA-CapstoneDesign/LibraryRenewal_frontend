import styled from 'styled-components';

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
    border: 1px solid #ffffff;
  }

  .col-title {
    text-align: center;
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
`;

const MyReserveList = () => {
  return (
    <Container>
      <h3>총 1건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">No.</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">저자</td>
              <td className="col-title">예약일</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">1</td>
              <td className="col-title">
                3D studio Max 4.x:character studio 3.1
              </td>
              <td className="col-title">정준한</td>
              <td className="col-title">2023-05-27</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExtensionBtn>예약취소</ExtensionBtn>
    </Container>
  );
};

export default MyReserveList;