import { useEffect, useState } from 'react';
import { LogoURl } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnReact, setBtnReact] = useState('Login');

  return (
    <div className="header">
      <img src={LogoURl} className="logo" alt="" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnReact == 'Login') {
                setBtnReact('Logout');
              } else {
                setBtnReact('Login');
              }
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
