import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogItem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://34.64.215.230:8080/api/notice/list?page=1')
      .then(response => {
        setUsers(response.data.dtoList);
      });
  }, []);

  return (
    users.map((data) => (
      <div className='blogItem-wrap' key={data.nno}>
        <img src={data.image} alt='cover' />
        <h3>{data.title}</h3>
        <p className='blogItem-desc'>{data.content}</p>

        <footer>
          <div className='blogItem-author'>
            <img src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" alt='avatar' />
            <div>
              <h6>{data.writer}</h6>
              <p>{data.regDate}</p>
            </div>
          </div>
        </footer>
      </div>
    ))

  );
}
export default BlogItem;

// const BlogItem = ({
//     blog: {
//       description,
//       title,
//       createdAt,
//       authorName,
//       authorAvatar,
//       cover,
//       category,
//       id,
//     },
//   }) => {
//   return (
//     <div className='blogItem-wrap'>
//       <img src={cover} alt='cover' />
//       <Chip label={category} />
//       <h3>{title}</h3>
//       <p className='blogItem-desc'>{description}</p>

      // <footer>
      //   <div className='blogItem-author'>
      //     <img src={authorAvatar} alt='avatar' />
      //     <div>
      //       <h6>{authorName}</h6>
      //       <p>{createdAt}</p>
      //     </div>
      //   </div>
      //   <Link className='blogItem-link' to={`/blog/${id}`}>
      //     ➝
      //   </Link>
      // </footer>
//     </div>
//   );
// };

// export default BlogItem;