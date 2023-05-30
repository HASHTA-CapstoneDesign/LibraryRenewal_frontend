import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStudyRoomList } from '../../api/studyRoom/studyRoomList';
import { useState, useEffect } from 'react';
import { STUDYROOM_FLOOR1_ENDPOINT } from '../../api/studyRoom/studyRoomList';

const RoomContent = styled.div`
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
`;

const ReserveTime = ({ item }) => {
  const [useTime, setUseTime] = useState('');

  const handleClickUseTime = (e) => {
    console.log(item.time);
  };

  return (
    <RoomContent>
      <button
        className="time first"
        value={item.time}
        onClick={(e) => handleClickUseTime(e)}
      >
        <span>{item.time}</span>
        <span>{item.roomReserve}</span>
      </button>
    </RoomContent>
  );
};

export default ReserveTime;