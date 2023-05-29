import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
#div1 {
  height: 200px;
  width: 340px;
  display: flex;
  text-align: left;
  border-radius: 30px;
}

#div3 {
  height: 200px;
  width: 340px;
  display: flex;
  text-align: left;
  border-radius: 30px;

}

#div2 {
  height: 200px;
  width: 340px;
  text-align: left;
}

img {
  height: 175px;
  width: 130px;
  margin: auto;
  border-radius: 25px;
}

button {
  height: 30px;
  width: 100px;
  float: right;
  background-color:transparent;
  border:none;
}
`;

const BookItem = ({ img, title, author}) => {

  return (
    <Container>
    <div id="div3">
    <div style={{ float: 'left', width: '45%' }} id="div1">
      <img src={img} alt="My Image" />
    </div>
    <div style={{ float: 'left', width: '55%' }} id="div2">
      <div style={{ padding: '15px 0px 0px 0px' }}></div>
      <h5>제목 : {title}</h5>
      <p>저자 : {author}</p>
      <div style={{ padding: '30px 0px 0px 0px' }}></div>
      <button>대출하기</button>
    </div>
  </div>
  </Container>
  );
}
export default BookItem;
