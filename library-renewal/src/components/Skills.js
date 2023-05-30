import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get('http://34.64.215.230:8080/api/books/recommend')
          .then(response => {
              setUsers(response.data);
          });
  }, []);

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>오늘의 추천 도서</h2>
                        <p>대출 이력에 기반한 오늘의 도서를 추천해드립니다!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">{
                           users.map((data) => (
                            <div className="item" key={data.bno}>
                              <img src={data.image} alt="Image" />
                              <h5>{data.title}</h5>
                            </div>
                        ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}