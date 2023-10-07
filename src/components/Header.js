import { useState } from 'react';
import { LogoURl } from '../utils/constants';

const Header = () => {
  const [btnReact, setBtnReact] = useState('Login');
  return (
    <div className="header">
      <img src={LogoURl} className="logo" alt="" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnReact('Logout');
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
