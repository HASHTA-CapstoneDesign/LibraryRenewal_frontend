import styled from 'styled-components';
import BookItem from './BookItem'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Container = styled.div`
.product_container{
  display:flex;
  flex-direction: row;
  flex-wrap : wrap;
  width: 100%;
}
.product{
  width:25%;
  height: 100%;
  margin-bottom : 4%;
  /* border: 1px solid black; */
}

.blogList-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
}

#input1 {
  width : 300px;
  height : 40px;
	background-color : gray;
  border-radius: 10px;
  text-align: center;
	}

#div1 {
  text-align: center;
}
`;

const Booklist = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('')
  const [page, setpage] = useState(1)

  useEffect(() => {
    axios.get(`http://34.64.215.230:8080/api/books/list?size=12`)
      .then(response => {
        setUsers(response.data.dtoList);
      });
  }, []);

  const onSubmitHeader = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value
    axios.get(`http://34.64.215.230:8080/api/books/search?keyword=${encodeURIComponent(keyword)}&size=12&page=1`)
      .then(response => {
        setUsers(response.data.dtoList);
      });
  }


  const Title = styled.h1`
  text-align: center;
  `

  return (
    <Container>
      <div className='container'>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <Title>도서</Title>
        <div className="space-for-nav" style={{ height: "1rem" }}></div>
        <form id='div1' onSubmit={onSubmitHeader}>
          <input id='input1' name='keyword' />
          <input type='submit' value='검색' />
        </form>

        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className='blogList-wrap'>{

          users == null
            ? <>
            <div></div>
            <h2>검색결과가 없습니다.</h2>
            </>
            : users.map((item) => (
              <BookItem
                img={item.image}
                title={item.title}
                author={item.author}
              />
            ))


        }
        </div>
        <div>

        </div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
      </div>
    </Container>
  )
}

export default Booklist