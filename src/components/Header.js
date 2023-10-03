import { LogoURl } from '../utils/constants';

const Header = () => {
  return (
    <div className="header">
      <img src={LogoURl} className="logo" alt="" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
