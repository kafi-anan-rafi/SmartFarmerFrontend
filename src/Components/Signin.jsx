import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function Signin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(config.apiURL + "posts")
      .then(res => {
        console.log(res)
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      if (users.type === "farmer")
        navigate("/farmer")
      if (users.type === "customer")
        navigate("/customer")
      if (users.type === "doctor")
        navigate("/doctor")
      if (users.type === "advisor")
        navigate("/advisor")
    } else {
      console.log("No");
    }
  }

  return (
    <div className='content d-flex justify-content-center'>
      <form onSubmit={handleSubmit} className="col-5">
        <div className="form-group">
          <label className='mt-20' htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name='email' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name='password' />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>

  )
}

export default Signin