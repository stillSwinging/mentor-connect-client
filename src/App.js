import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Simple from './Components/Simple';
import axios from 'axios';  // for the constructor below (VP 6/19/2022)

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
    );
  }
}

export default App;
