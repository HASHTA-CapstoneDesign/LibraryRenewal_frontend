import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
.box{
  height: 700px;
}
li{
  list-style-type: none;
  width: 120px;
  height: 150px;
  background-color: #394867;
  border-radius: 28px;
  text-align: center;
  color: white;
  margin-left: 60px;
  margin-right: 20px;
  font-weight: bold;
}
li>a{
  text-decoration: none;
}

.book.hovered {
  background-image: none;
  background-color: #f1f1f1;
}
ul{
  display: flex;
}
.book{
  
  background-size: cover;
  box-sizing: border-box;
  line-height: 25vh;
  transform: scale(1);
 
}
.book > p{
  opacity: 0;
  
}
.book:hover{
  background-image: none;
  background-color: #394867;
  transition: transform 0.4s linear;
  transform: scale(1.1);

}

h5{
  padding-left: 15px;
}
.book:hover p{
  opacity: 1;
  padding-top: 15px;
  padding-left: 3px;
  padding-right: 3px;

}
p{
  font-size: small;
}

.new{
  margin-top: 90px;
}
`;


const Books = () => {
  const [limitedBooksData, setLimitedBooksData] = useState([]);
  const [limitedBestData, setLimitedBestData] = useState([]);
  // const [getBooksData, setGetBooksData] = useState([]);
  // const [getBestData, setGetBestData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredBestIndex, setHoveredBestIndex] = useState(-1);

  useEffect(() => {
    axios.get('http://34.64.215.230:8080/api/books/recent') //최신 도서 조회
      .then(response => {
        setLimitedBooksData(response.data);
      });

    axios.get('http://34.64.215.230:8080/api/books/popular') //인기 도서 조회
      .then(response => {
        setLimitedBestData(response.data);
      });

    // const shuffledBooks = shuffle(getBooksData);
    // const shuffledBestBooks = shuffle(getBestData);

    // const limitedBooks = getBooksData.splice(0,5);
    // const limitedBestBooks = getBestData.splice(0,5);

    // setLimitedBooksData(limitedBooks);
    // setLimitedBestData(limitedBestBooks);
  }, []);

  const handleMouseEnter = (index, isBest) => {
    if (isBest) {
      setHoveredBestIndex(index);
    } else {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = (isBest) => {
    if (isBest) {
      setHoveredBestIndex(-1);
    } else {
      setHoveredIndex(-1);
    }
  };

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <div className='container'>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <Container>
        <div className='box'>
          <header className='home-header'>
            <h1>
              <span></span> 신착/인기도서 <span></span>
            </h1>
          </header>
          <div className="new">
            <h5>신착도서</h5>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            <ul>
                {
                  limitedBooksData.map((book) => (
                    <li
                      className={`book ${hoveredIndex === book.bno ? 'hovered' : ''}`}
                      key={book.bno}
                      style={{
                        backgroundImage: hoveredIndex === book.bno ? 'none' : `url(${book.image})`,
                        backgroundColor: hoveredIndex === book.bno ? '#394867' : ''
                      }}
                      onMouseEnter={() => handleMouseEnter(book.bno, false)}
                      onMouseLeave={() => handleMouseLeave(false)}
                    >
                      <p>{book.title} - {book.author}</p>
                    </li>
                  ))
                }
              
            </ul>
            </div>
          </div>
          <div className="best">
            <h5>인기도서</h5>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            <ul>
              {limitedBestData.map((book, index) => (
                <li
                  className={`book ${hoveredBestIndex === index ? 'hovered' : ''}`}
                  key={book.id}
                  style={{
                    backgroundImage: hoveredBestIndex === index ? 'none' : `url(${book.image})`,
                    backgroundColor: hoveredBestIndex === index ? '#394867' : ''
                  }}
                  onMouseEnter={() => handleMouseEnter(index, true)}
                  onMouseLeave={() => handleMouseLeave(true)}
                >
                  <p>{book.title} - {book.author}</p>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
    </div>
  );
};

export default Books;
