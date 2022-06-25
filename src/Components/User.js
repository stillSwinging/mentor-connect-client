
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios';
// import MentorModal from './BookFormModal.js';
// import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import '../CSS/App.css';
import { PopupWidget } from 'react-calendly';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
      // showForm: false
    };
  }


  componentDidMount = async () => {
    console.log(this.props.auth0);
    try {

      // if (this.props.auth0.isAuthenticated) {
      //   const res = await this.props.auth0.getIdTokenClaims();
      //   const jwt = res.__raw;
      //   console.log('token: ', jwt);

      const config = {
        // headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        // baseURL: process.env.REACT_APP_SERVER,
        baseURL: 'http://localhost:3001',
        url: '/userInfo?type=mentor'
      };
      console.log(config);
      const response = await axios(config);
      console.log(response.data);
      this.setState({ userInfo: response.data });
      // }
    } catch (error) {
      console.error('Error in SignUp componentDidMount function: ', error);
    }
  };

  PopupWidget = () => {
    return (
      <div className='PopUpWidgetApp'>
        <PopupWidget
          url='https://calendly.com/mentor-connect'
          rootElement={document.getElementById('root')}
          text='Schedule'
          textColor='#ffffff'
          color='#00a2ff'
        />
      </div>
    );
  };


  // closeBookFormModal = () => this.setState({ showForm: false });
  //pass the info as props to this user component.
  render() {
    console.log(this.state);
    return (
      <>
        {this.state.userInfo.length > 0 ? (
          <>
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
                    <Image src={'http://api.multiavatar.com/'+user.firstName+'.png'} width="100px" />
                    <h3 className="carousel-text">{user.firstName}</h3>
                    <p className="carousel-text">{user.interest}</p>
                    {/* <Button onClick={this.PopupWidget}>Schedule NOW</Button> */}

                    <PopupWidget
                      url='https://calendly.com/mentor-connect'
                      rootElement={document.getElementById('root')}
                      text='Schedule'
                      textColor='#ffffff'
                      color='#00a2ff'
                    />

                    {/* <div className="App">
                      <InlineWidget url="https://calendly.com/your_scheduling_page" />
                    </div> */}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* <div className='PopUpWidgetApp'>
              <PopupWidget
                url='https://calendly.com/mentor-connect'
                rootElement={document.getElementById('root')}
                text='Schedule'
                textColor='#ffffff'
                color='#00a2ff'
              />
            </div> */}
          </>
        ) : (
          <h3>No User Found :(</h3>
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
