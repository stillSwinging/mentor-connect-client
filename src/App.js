import React from 'react';
import './CSS/App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Mission from './Components/Mission';
import SignUp from './Components/SignUp';
import User from './Components/User';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// comments from Tanesha Brester
// keep header and footer outside of the route if you want your header to show up on every pages, do not wrap it in a route
// in order to keep the body and the simple.js in a route tag with a route to tell it which route that component should render



class App extends React.Component {

  constructor(props) { // I think this constructor actually belongs on the userInfo card that MQR is coding. Move as appropriate. (VP 6/19/2022)
    super(props);
    this.state = {
      resultingUserList: [], // (VP 6/19/2022)
      firstName: '',
      lastName: '',
      email: '',
      YOB: '',
      type: '',
      interest: '',
      timeZone: '',
      avatar: '',
      student: []
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

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      email: e.target.value,
      interest: e.target.value,
      timeZone: e.target.value
    }, () => console.log(this.state.firstName));
  };




  render() {
    return (

      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />} />
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
            element={<SignUp
              handleChange={this.handleChange}

            />} />
          <Route
            path="/user"
            element={<User />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}


export default App;
