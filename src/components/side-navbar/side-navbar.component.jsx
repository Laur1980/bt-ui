import React from 'react';
import './side-navbar.css';
import { Link } from 'react-router-dom';

const SideNavbar = (props) => {
  const handleClick = () => {};

  return (
    <div className='side-navbar-container'>
      <ul>
        <li>
          <Link id='home' onClick={handleClick} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link id='add' onClick={handleClick} to='/add_bug'>
            Add bug
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
