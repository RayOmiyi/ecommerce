import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../Styles/Navbar.css';
import { BsFillBagFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>Header</Link>
        </li>
        <li className='nav-item'>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <div className='logo'><BsFillBagFill/></div>
    </div>
  );
};

export default Navbar;
