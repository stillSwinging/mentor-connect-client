import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Simple from './Components/Simple';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
        <Simple />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    );
  }
}

export default App;
