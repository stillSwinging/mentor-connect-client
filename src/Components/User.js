
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios';
// import MentorModal from './BookFormModal.js';
import { Container, Button } from 'react-bootstrap';
// import { User, withAuth0 } from '@auth0/auth0-react';


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <Container>
          <Carousel id="carousel">
            <Carousel.Item>
              <Carousel.Caption id="carousel-text-box">
                <Button id="delete" >
                  Delete</Button>
                <Button></Button>
                <Button variant="primary">
                  Add Book
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
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
