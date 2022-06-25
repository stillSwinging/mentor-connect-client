import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../CSS/Header.css';
import Login from '../auth/Login';
import Logout from '../auth/Logout';
import Profile from '../auth/Profile';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="header" bg="#003b49" expand="lg" >
        <Container>
          <Link className="logo" to='/home'>MentorConnect</Link>
          <Nav className="nav-menu">
            <li>
              <Link className="text" to='/home'>Home</Link>
            </li>
            <li>
              <Link className="text" to='/about'>About Us</Link>
            </li>
            <li>
              <Link className="text" to='/mission'>Our Mission</Link>
            </li>
            <li>
              <Link className="text" to='/signup'>Sign Up</Link>
            </li>
            {this.props.auth0.isAuthenticated ?
              <>
                <li>
                  <Link className="text" to='/User'>User</Link>
                </li>
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
//             <Link href='/signup'>Get Started</Link>
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
