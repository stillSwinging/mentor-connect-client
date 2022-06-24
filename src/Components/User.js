
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios';
// import MentorModal from './BookFormModal.js';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import '../CSS/App.css';


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      showForm: false
    };
  }


  componentDidMount = async () => {
    console.log(process.env.REACT_APP_SERVER);
    try {

      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log('token: ', jwt);

        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/userInfo?type=mentor'//this might need to be changed to /users 

        };
        console.log(config);
        const response = await axios(config);
        // axios gives us what we want in a property called 'data'
        console.log(response.data); //we are expecting to see the array of the mentor info I believe, need to test. referrencing can-of-books full demo 06-10-22 at 1:00:00 - 1:06:46, MQR(06-21-22)
        this.setState({ userInfo: response.data });
      }
    } catch (error) {
      console.error('Error in SignUp componentDidMount function: ', error);
    }
  };




  // createUser = async (newUser) => {
  //   console.log(process.env.REACT_APP_SERVER);
  //   try {

  //     if (this.props.auth0.isAuthenticated) {
  //       const res = await this.props.auth0.getIdTokenClaims();
  //       const jwt = res.__raw;
  //       console.log('token: ', jwt);

  //       const config = {
  //         headers: { "Authorization": `Bearer ${jwt}` },
  //         method: 'post',
  //         baseURL: process.env.REACT_APP_SERVER,
  //         url: '/userInfo?type=mentor',//this might need to be changed to /users 
  //         data: newUser

  //       };
  //       console.log(config);
  //       const response = await axios(config);
  //       // axios gives us what we want in a property called 'data'
  //       console.log(response.data);

  //       const newUserArr = [...this.state.userInfo, response.data];
  //       this.setState({ userInfo: newUserArr });
  //     }
  //   } catch (error) {
  //     console.error('Error in SignUp componentDidMount function: ', error);
  //   }
  // };




  closeBookFormModal = () => this.setState({ showForm: false });
  //pass the info as props to this user component.
  render() {

    return (
      <>
        {this.state.userInfo.length > 0 ? (
          <Carousel fade={true} pause={false} className="height">
            {this.state.userInfo.map(user => (
              <Carousel.Item key={user._id} interval={6000}>
                <img
                  id='image'
                  className="w-100"
                  src='./Images/Student1.jpg'
                  alt="First slide"
                />
                <Carousel.Caption id="carousel-text">
                  <h3 className="carousel-text">{user.firstName}</h3>
                  <p className="carousel-text">{user.interest}</p>
                  <Button >Schedule</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No user Found :(</h3>
        )}
      </>
    );
  }
}


export default withAuth0(User);






// //<Button variant="primary"> onClick={() => this.setState({ showModal: true, bookToBeUpdated: null })}
//                       Add Book
//                     </Button>

{/* <Image id="carousel-image"
                    className="w-100"
                    src={bookImg}
                    alt={book.title}

                  /> */}
