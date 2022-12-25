import React from 'react'

function Signin() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
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