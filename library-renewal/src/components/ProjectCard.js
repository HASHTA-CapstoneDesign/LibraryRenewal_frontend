import { Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProjectCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get('http://34.64.215.230:8080/api/notice/important')
          .then(response => {
              setUsers(response.data);
          });
  }, []);

  return (
    <Col size={12} sm={6} md={4}>{
      users.map((data) => (
        <div className="proj-imgbx">
        <img src={data.image}/>
        <div className="proj-txtx">
          <h4>{data.title}</h4>
          <span>{data.writer}</span>
        </div>
      </div>
      ))
    }
    </Col>
  )
}