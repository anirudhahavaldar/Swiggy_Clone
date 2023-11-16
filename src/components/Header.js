import { useState } from 'react';
import { LogoURl } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Logo from '../../images/Logo.png';

const Header = () => {
  const [btnReact, setBtnReact] = useState('Login');

  const onelineStatus = useOnlineStatus();

  return (
    <div className="shadow-lg py-4">
      <div className="container  mx-auto flex justify-between items-center">
        <p className=" font-Merienda text-2xl">Zwiggy</p>
        <div className="">
          <ul className="flex ">
            <li className="ml-4  text-[16px] cursor-pointer hover:text-[#FC8019]">
              OnlineStatus: {onelineStatus ? '✅' : '📴'}{' '}
            </li>
            <li className="ml-4 ">
              <Link className="text-[16px]" to="/">
                Home
              </Link>
            </li>

            <li className="ml-4 ">
              <Link className="text-[16px]" to="/about">
                About Us
              </Link>
            </li>
            <li className="ml-4 ">
              <Link className="text-[16px]" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="ml-4 ">
              <Link className="text-[16px]" to="/grocery">
                Grocery
              </Link>
            </li>
            <li className="ml-4 ">Cart</li>
            <button
              className="login ml-4"
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
    </div>
  );
};

export default Header;
