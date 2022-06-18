import React from 'react';
import { Link } from "react-router-dom";
import {  FaTimes } from 'react-icons/fa';
import './NavHeader.css';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>MentorMatcher</h1>
        <ul className="nav-menu">
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/OurMission'>Our Mission</Link>
          </li>
          <li>
            <Link to='/GetStarted'>Get Started</Link>
          </li>
        </ul>
        <div className='hamburger'>
          <FaTimes size={20} style={{ color: '#fff' }} />
        </div>
      </div>
    );
  }

}
export default Header;
