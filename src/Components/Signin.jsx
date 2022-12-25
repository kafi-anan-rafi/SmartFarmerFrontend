import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(config.apiURL + "login", {
      Email: email,
      Password: password
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        setAlert(true)
        console.log(err);
      })
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);

  }

  return (
    <div className='content d-flex justify-content-center'>
      <form onSubmit={handleSubmit} className="col-5">
        <h1>Signin</h1>
        <div className="form-group">
          <label className='mt-20' htmlFor="email">Email address</label>
          <input type="email" onChange={handleEmailChange} className="form-control" id="email" name='email' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={handlePasswordChange} className="form-control" id="password" name='password' />
        </div>
        {alert && <div className='alert alert-danger'>Email or Password incorrect</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>

  )
}

export default Signin