import React from 'react'
import { Link } from 'react-router-dom';

function Farmer() {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <Link to="/sellproduct" className=" btn btn-primary nav-link">
        Sell Product
      </Link>
      <Link to="/buyproduct" className="btn btn-warning nav-link mt-10">
        Buy Product
      </Link>
    </div>
  )
}

export default Farmer