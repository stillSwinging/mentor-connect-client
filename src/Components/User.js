
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import Image from 'react-bootstrap/Image';
// import axios from 'axios';
// import MentorModal from './BookFormModal.js';
import Button from 'react-bootstrap/Button';
// import { User, withAuth0 } from '@auth0/auth0-react';
import '../CSS/App.css';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //pass the info as props to this user component.
  render() {

    return (
      <>
        <Carousel fade={true} pause={false} className="height">
          <Carousel.Item interval={6000}>
            <img
              id='image'
              className="w-100"
              src='./Images/Student1.jpg'
              alt="First slide"
            />
            <Carousel.Caption id="carousel-text">
              <h3 className="carousel-text">First slide label</h3>
              <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button >Schedule</Button>
              {/* <Button>Mentor</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              id='image'
              className="d-block w-100"
              src='./Images/Teacher6.jpg'
              alt="second slide"
            />
            <Carousel.Caption id="carousel-text">
              <h3 className="carousel-text">Second slide label</h3>
              <p className="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button >Schedule</Button>
              {/* <Button>Mentor</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              id='image'
              className="d-block w-100"
              src='./Images/Student4.jpg'
              alt="Third slide"
            />
            <Carousel.Caption id="carousel-text">
              <h3 className="carousel-text">Third slide label</h3>
              <p className="carousel-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button >Schedule</Button>
              {/* <Button>Mentor</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              id='image'
              className="d-block w-100"
              src='./Images/Student2.jpeg'
              alt="Third slide"
            />
            <Carousel.Caption id="carousel-text">
              <h3 className="carousel-text">Third slide label</h3>
              <p className="carousel-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button>Schedule</Button>
              {/* <Button>Mentor</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}


export default User;

// //<Button variant="primary"> onClick={() => this.setState({ showModal: true, bookToBeUpdated: null })}
//                       Add Book
//                     </Button>

{/* <Image id="carousel-image"
                    className="w-100"
                    src={bookImg}
                    alt={book.title}

                  /> */}
