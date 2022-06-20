import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './Components/Header';
// import Body from './Components/Body';
import Footer from './Components/Footer';
<<<<<<< Updated upstream
import Simple from './Components/Simple';
import axios from 'axios';  // for the constructor below (VP 6/19/2022)

=======
// import Simple from './Components/Simple';
import AboutUs from './aboutUs.js';
import MissionAndVision from './missionAndVision';
import "./App.css";

// comments from Tanesha Brester
// keep header and footer outside of the route if you want your header to show up on every pages, do not wrap it in a route
// in order to keep the body and the simple.js in a route tag with a route to tell it which route that component should render
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <>
        <Router >
          <Header />
          <Body />
          <Simple />
          <Footer />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
=======
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        {/* <Routes>
          <Route path="/Home" element={<Body />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<Simple />} />
        </Routes> */}

        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/missionAndVision" element={<MissionAndVision />} />
        </Routes>
        <Footer />
      </Router >
>>>>>>> Stashed changes
    );
  }
}

export default App;
