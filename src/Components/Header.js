import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../CSS/Header.css';
import Login from '../auth/Login';
import Logout from '../auth/Logout';
import Profile from '../auth/Profile';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="header" bg="light" expand="lg" >
        <Container>
          <Navbar.Brand className="headerLetter" href="/home">Mentor Matcher</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="nav-menu">
            <Nav.Link className="text" href='/home'>Home</Nav.Link>
            <Nav.Link className="text" href='/about'>About Us</Nav.Link>
            <Nav.Link className="text" href='/mission'>Our Mission</Nav.Link>
            <Nav.Link className="text" href='/signup'>Sign Up</Nav.Link>
            {this.props.auth0.isAuthenticated ?
              <>
                <Nav.Link className="text" href='/User'>User</Nav.Link>
                <Profile />
                <Logout />
              </>
              :
              <>
                <Login />
              </>

            }
          </Nav>

        </Container>
      </Navbar>
    );
  }
}
export default withAuth0(Header);


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
