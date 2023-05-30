import React from 'react'
import Header from '../NoticeComponents/Header';
import SearchBar from '../NoticeComponents/SearchBar';
import BlogList from '../NoticeComponents/BlogList';
import EmptyList from '../NoticeComponents/Common/EmptyList';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { NavBar } from '../components/NavBar';
import { Navbar, Nav, NavDropdown, Container, Image, Card,Carousel } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Notice.css';
import { blogList } from '../NoticeComponents/config/data';


function Notice() {

  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };
  
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='container'>
    <div className="space-for-nav" style={{ height: "4rem" }}></div>
    <div className="space-for-nav" style={{ height: "4rem" }}></div>
  
    <Header />
    <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

    <div className='relative flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {data.map((item) => (
           <img
             className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
             src={item.img}
             alt='/'
          />
        ))}
      </div>
       <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div>

      <div className="space-for-nav" style={{ height: "4rem" }}></div>

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
    </div>
    
  );
}
     

export default Notice