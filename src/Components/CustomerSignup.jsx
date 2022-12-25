import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function CustomerSignup() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    type: 'Customer',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(config.apiURL + "user/add", {
      Email: customer.email,
      Password: customer.password,
      Type: customer.type
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
    Axios.post(config.apiURL + "customer/add", {
      Name: customer.name,
      Address: customer.address
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      <div className='content d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className="col-5">
          <h2>Customer Signup</h2>
          <div className="form-group">
            <label className='mt-20' htmlFor="name">Name</label>
            <input type="text" onChange={e => setCustomer({ ...customer, name: e.target.value })} className="form-control" id="name" name='name' />
          </div>
          <div className="form-group">
            <label className='mt-20' htmlFor="email">Email address</label>
            <input type="email" onChange={e => setCustomer({ ...customer, email: e.target.value })} className="form-control" id="email" name='email' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={e => setCustomer({ ...customer, password: e.target.value })} className="form-control" id="password" name='password' />
          </div>
          <div className="form-group">
            <label className='mt-20' htmlFor="address">address</label>
            <input type="text" onChange={e => setCustomer({ ...customer, address: e.target.value })} className="form-control" id="address" name='address' />
          </div>
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
      </div>
    </div>

  )
}

export default CustomerSignup