import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../CSS/Home.css';
import { Image } from 'react-bootstrap';




class Home extends React.Component {
  render() {
    return (
      <div id="card">
        <Image className='hero' src="./Images/MM7.jpg"></Image>
        <CardGroup >
          <Card id="card-top">
            <Card.Img src='Images/MM4.jpg' alt='student' />
          </Card>
          <Card id="card-top">
            <Card.Img variant="top" src='Images/MM8-1.jpg' />
          </Card>
          <Card id="card-top">
            <Card.Img variant="top" src="Images/MM5-1.jpg" />
          </Card>
        </CardGroup>
      </div >
    );
  }
}
export default Home;
