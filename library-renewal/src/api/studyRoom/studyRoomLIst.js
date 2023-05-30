import defaultRequest from '../defaultRequest';
import authRequest from '../authRequest';

export const STUDYROOM_FLOOR1_ENDPOINT =
  process.env.REACT_APP_API +
  process.env.REACT_APP_API_STUDYROOM_FLOOR1_ENDPOINT;

// /api/room?floor={}&data={}
export const getStudyRoomList = async ({ floor, data }) => {
  console.log('api ', floor);
  try {
    const res = await defaultRequest.get('/api/room', {
      params: { floor, data },
    });

    return res?.data?.data;
  } catch (err) {
    console.log(err);
  }
};

// api url
export const STUDYROOM_ENDPOINT =
  process.env.REACT_APP_SERVER_API +
  process.env.REACT_APP_API_STUDYROOM_RESERVE;

const API_CONNECT_TIMEOUT = 2000;

// 시설 예약 현황 조회
export const studyRoomGetById = async (boardId) => {
  if (boardId) {
    const path = `${STUDYROOM_ENDPOINT}/${boardId}`;
    try {
      const res = await defaultRequest.get(path);
      return res?.data?.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};

// 시설 예약
export const studyRoomCreate = async (body) => {
  try {
    const res = await authRequest.post(STUDYROOM_ENDPOINT, body, {
      timeout: API_CONNECT_TIMEOUT,
    });
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.error('Error: ', err);
    return { state: 'error ' };
  }
};

// 시설 예약 정보 수정
export const boardPatch = async (boardId, body) => {
  const path = `${STUDYROOM_ENDPOINT}/${boardId}`;

  try {
    let result = await authRequest.patch(path, body, {
      timeout: API_CONNECT_TIMEOUT,
    });
    return { state: 'OK', data: result.data.response };
  } catch (err) {
    console.error('Error: ', err);
    return { statusText: 'error ' };
  }
};

// 시설 예약 취소
export const studyRoomDelete = async (roomId) => {
  const path = `${STUDYROOM_ENDPOINT}/cancel/${roomId}`;

  try {
    let result = await authRequest.delete(path, {
      timeout: API_CONNECT_TIMEOUT,
    });
    return { state: 'OK', msg: result.data };
  } catch (err) {
    console.error('Error: ', err);
    return { state: 'error ' };
  }
};

// 글 좋아요 & 좋아요 취소
export const boardLike = async (boardId, body) => {
  const path = `${STUDYROOM_ENDPOINT}/${boardId}/like`;

  try {
    let result = await authRequest.post(path, body, {
      timeout: API_CONNECT_TIMEOUT,
    });
    return { state: 'OK', msg: result.data };
  } catch (err) {
    console.error('Error: ', err);
    return { state: 'error ' };
  }
};