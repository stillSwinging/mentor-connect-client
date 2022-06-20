import React from 'react';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import './NavHeader.css';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>MentorMatcher</h1>
        <ul className="nav-menu">
          <li>
            {/* anything linked to a plain forward slash is going to automatically render to your home component -Tanesha Brester */}
            <Link to='/'>Home</Link>
          </li>
          <li>
            {/* does not link to anything, in order to render this page, import this into App.js and create a parent <Routes> element (similar to what is being done with the aboutUs section) - Tanesha Brester */}
            <Link to='/OurMission'>Our Mission</Link>
          </li>
          <li>
            {/* does not link to anything, check above notes- Tanesha Brester */}
            <Link to='/GetStarted'>Get Started</Link>
          </li>
          <li>
            <Link to='/aboutUs'>About Us</Link>
          </li>
          <li>
            <Link to='/missionAndVision'>Mission and Vision</Link>
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
