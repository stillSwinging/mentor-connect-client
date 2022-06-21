import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Body from './Body';
import Footer from './Footer';
import Mission from './Mission';
import SignUp from './SignUp';
// import Simple from './Simple';
// import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './NavBar';


class App extends React.Component {
  render() {
    return (

      <Router>
        <Header />

        <Routes>
          <Route
            path="/home"
            element={<Home />} />
          <Route
            path="/header"
            element={<Header />} />
          <Route
            path="/about"
            element={<About />} />
          <Route
            path="/body"
            element={<Body />} />
          <Route
            path="/mission"
            element={<Mission />} />
          <Route
            path="/signup"
            element={<SignUp />} />
          {/* <Route
            path="/simple"
            element={<Simple />} /> */}
          {/* <Route
            path="/user"
            element={<User />} /> */}
          <Route
            path="/footer"
            element={<Footer />} />
        </Routes>

      </Router>

    );
  }
}


export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './routes/Home';
// import Header from './Components/Header';
// import Body from './Components/Body';
// import Footer from './Components/Footer';
// import Simple from './Components/Simple';
// import User from './Components/User';
// import Profile from './auth/Profile';
// class App extends React.Component {
//   render() {
//     return (

//       <Router>
//         <Header />
//         <Body />
//         {/* <User /> */}
//         <Simple />
//         <Footer />
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />} />
//           <Route
//             path="/"
//             element={<Profile />} />
//           <Route
//             path="/"
//             element={<User />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;
