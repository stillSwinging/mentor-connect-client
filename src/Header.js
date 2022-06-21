import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './NavHeader.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="header" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="headerLetter" href="/home">Mentor Matcher</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="nav-menu">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/about'>About Us</Nav.Link>
            <Nav.Link href='/mission'>Our Mission</Nav.Link>
            <Nav.Link href='/signup'>Sign Up</Nav.Link>

          </Nav>

        </Container>
      </Navbar>
    );
  }
}
export default Header;


// import React from 'react';
// import { Link } from "react-router-dom";
// import { FaTimes } from 'react-icons/fa';
// import './NavHeader.css';


// class Header extends React.Component {
//   render() {
//     return (
//       <div className="header">
//         <h1>MentorMatcher</h1>
//         <ul className="nav-menu">
//           <li>
//             <Link to='/Home'>Home</Link>
//           </li>
//           <li>
//             <Link href='/OurMission'>Our Mission</Link>
//           </li>
//           <li>
//             <Link to='/GetStarted'>Get Started</Link>
//           </li>
//           <li>
//             <Link to='/AboutUs'>About Us</Link>
//           </li>
//         </ul>
//         <div className='hamburger'>
//           <FaTimes size={20} style={{ color: '#fff' }} />
//         </div>
//       </div>
//     );
//   }

// }
// export default Header;
