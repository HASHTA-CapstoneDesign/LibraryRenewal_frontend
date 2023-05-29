import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStudyRoomList } from '../../api/studyRoom/studyRoomList';
import { useState, useEffect } from 'react';
import { STUDYROOM_FLOOR1_ENDPOINT } from '../../api/studyRoom/studyRoomList';

const RoomContent = styled.div`
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
`;

const ReserveTime = ({ item }) => {
  const handleClickUseTime = (e) => {
    console.log(e.target.value);
  };

  return (
    <RoomContent>
      <div className="room-reservation">
        <button
          className="time first"
          value="13:00~14:00"
          onClick={(e) => handleClickUseTime(e)}
        >
          <span>{item.time}</span>
          <span>{item.roomReserve}</span>
        </button>
      </div>
    </RoomContent>
  );
};

export default ReserveTime;
