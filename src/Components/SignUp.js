// import axios from 'axios';
import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// import { useState } from 'react';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
      timeZone: '',
      YOB: '',
      avatar: '',
      type: ''
    };
  }

  // redirecting. this would go inside the callback function enter this at the END of function.
  //location.href= '/user';
  //handle submit or handle onclick.


  // FormExample = () => {
  //   const [validated, setValidated] = useState(false);

  //   handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //     }

  //     setValidated(true);
  //   };
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.YOB, this.state.type, this.state.timeZone);
    // window.location.assign(`${process.env.REACT_APP_REDIRECT}`);
    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      interest: this.state.interest,
      timeZone: this.state.timeZone,
      YOB: this.state.YOB,
      avatar: this.state.avatar,
      type: this.state.type
    };
    console.log(newUser);
    this.props.createUser(newUser);
    window.location.assign('/user'); 
  };

  render() {

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* // noValidate validated={validated} onSubmit={handleSubmit}> */}
          <Row className="mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => this.setState({ type: event.target.value })}
            >
              <option>I am registering as...</option>
              <option value="student">Student</option>
              src/Components/SignUp.js              <option value="mentor">Mentor</option>
            </Form.Select>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(event) => this.setState({
                  firstName: event.target.value,
                  avatar: 'http://api.multiavatar.com/' + event.target.value + '.png'
                })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(event) => this.setState({ lastName: event.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => this.setState({ email: event.target.value })} />
            </Form.Group>
          </Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Year of Birth</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Year of Birth"
              onChange={(event) => this.setState({ YOB: event.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Area Interest</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Interest"
              onChange={(event) => this.setState({ interest: event.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Row className="mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => this.setState({ timeZone: event.target.value })}>        
              <option>Time Zone</option>
              <option value="Pacific">Pacific</option>
              <option value="Mountain">Mountain</option>
              <option value="Central">Central</option>
              <option value="Eastern">Eastern</option>
            </Form.Select>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </>
    );
  }
}


export default SignUp;



// /  const newUser = {
// firstName: event.target.firstName.value,
//   lastName: event.target.lastName.value,
//     email: event.target.email.value,
//       interest: event.target.interest.value,
//         timeZone: event.target.timeZone.value

//     };
// console.log(newUser);

// this.props.createUser(newUser);
