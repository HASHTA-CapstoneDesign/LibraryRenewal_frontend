import React from 'react'
import BlogItem from './BlogItem';
import './style.css';

const BlogList = ({ blogs }) => {
    return (
      <div className='blogList-wrap'>
        <BlogItem></BlogItem>
      </div>
    );
  };
  

export default BlogList;