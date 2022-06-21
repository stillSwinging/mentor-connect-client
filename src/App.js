import React from 'react';
import './CSS/App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Mission from './Components/Mission';
import SignUp from './Components/SignUp';
import axios from 'axios';
// import Simple from './Simple';
// import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './NavBar';


class App extends React.Component {

  constructor(props) { // I think this constructor actually belongs on the userInfo card that MQR is coding. Move as appropriate. (VP 6/19/2022)
    super(props);
    this.state = {
      resultingUserList: [] // (VP 6/19/2022)
    };
  }

  getMentors = async () => { // (VP 6/19/2022)
    const url = process.env.REACT_APP_API;
    const resultingUserList = await axios.get(`${url}/userInfo?type=mentor`);
    console.log(resultingUserList);
  };

  getStudents = async () => { // (VP 6/19/2022)
    const url = process.env.REACT_APP_API;
    const resultingUserList = await axios.get(`${url}/userInfo?type=student`);
    console.log(resultingUserList);
  };

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
