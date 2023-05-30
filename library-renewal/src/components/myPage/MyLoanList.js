import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
  //margin-bottom: 20rem;

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

const MyLoanList = () => {
  /*const [data, isLoading, error] = useFetch(
    `http://34.64.215.230:8080/api/loan/list/1`
  );

  let loanList;
  if (data) {
    loanList = data.response;
    console.log('data ', data);
  }*/

  return (
    <Container>
      <h3>총 5건</h3>
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
              <td className="col-title">대출일</td>
              <td className="col-title">반납예정일</td>
              <td className="col-title">연장횟수</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">1</td>
              <td className="col-title">(脈)신민사소송법:문제편</td>
              <td className="col-title">이상신</td>
              <td className="col-title">2023-05-27</td>
              <td className="col-title">2023-06-16</td>
              <td className="col-title">0</td>
            </tr>

            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">2</td>
              <td className="col-title">교육학</td>
              <td className="col-title">행정고시학원</td>
              <td className="col-title">2023-05-27</td>
              <td className="col-title">2023-06-16</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">3</td>
              <td className="col-title">
                불교 수행의 이론과 실제 :부처님 정통 수행입문서
              </td>
              <td className="col-title">빅쿠 붇드하빠-라</td>
              <td className="col-title">2023-05-27</td>
              <td className="col-title">2023-06-16</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">4</td>
              <td className="col-title">
                (사진과 함께 하는)나의 세계 문화 기행시
              </td>
              <td className="col-title">최단</td>
              <td className="col-title">2023-05-27</td>
              <td className="col-title">2023-06-16</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">5</td>
              <td className="col-title">
                3D studio Max 4.x:character studio 3.1
              </td>
              <td className="col-title">정준한</td>
              <td className="col-title">2023-05-27</td>
              <td className="col-title">2023-07-06</td>
              <td className="col-title">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExtensionBtn>대출연장</ExtensionBtn>
    </Container>
  );
};

export default MyLoanList;