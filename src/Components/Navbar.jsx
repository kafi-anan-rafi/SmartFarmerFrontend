import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-20">
      <div className='container'>
        <Link to="/" className="navbar-brand">{title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
            <Link to="/customersignup" className="nav-link">
              Customer Signup
            </Link>
            <Link to="/farmersignup" className="nav-link">
              Farmer Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Smart Farmer',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;