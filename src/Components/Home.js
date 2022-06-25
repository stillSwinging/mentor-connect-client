import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Button } from 'react-bootstrap';
import '../CSS/Home.css';
import { Image } from 'react-bootstrap';



class Home extends React.Component {
  render() {
    return (

      <div id="card">
        <CardGroup >
          <div>
            <Image className='hero' src="./Images/MM7.jpg"></Image>
            <p className='today'>Today's professionals guiding tomorrow's</p>
          </div>
          <Card id="card-top">
            <a href='https://www.youtube.com/watch?v=uEqxH6yZZU0'>
              <Card.Img height="500" width="500" src='Images/MM4.jpg' alt='student' />
            </a>
            <Button style={{ backgroundColor: '#003b49' }} className="btn" variant="primary">click the image to Learn more</Button>
          </Card>
          <Card id="card-top">
            <a href='https://www.indeed.com/career-advice/career-development/why-is-a-mentor-important'>
              <Card.Img height="500" width="500" variant="top" src='Images/MM8-1.jpg' />
            </a>
            <Button style={{ backgroundColor: '#003b49' }} className="btn" variant="primary">click the image to Learn more</Button>

          </Card>
          <Card id="card-top">
            <a href='https://webaccess.berkeley.edu/resources/tips/web-accessibility#accessible-forms'>
              <Card.Img height="500" width="500" variant="top" src="Images/MM5-1.jpg" />
            </a>
            <Button style={{ backgroundColor: '#003b49' }} className="btn" variant="primary">click the image to Learn more</Button>
          </Card>
        </CardGroup>
      </div >


    );
  }
}
export default Home;
