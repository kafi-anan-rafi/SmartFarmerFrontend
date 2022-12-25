import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../config.json';
function UserData() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(config.apiURL + "posts")
      .then(res => {
        console.log(res)
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default UserData