// import axios from 'axios';
import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// import { useState } from 'react';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
  handleSubmit = (event) => {
    event.preventDefault();
    window.location.assign(`${process.env.REACT_APP_REDIRECT}`);
  };



  render() {

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* // noValidate validated={validated} onSubmit={handleSubmit}> */}
          <Row className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>I am registering as...</option>
              <option value="1">Student</option>
              src/Components/SignUp.js              <option value="2">Mentor</option>
            </Form.Select>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={this.props.handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={this.props.handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.props.handleChange} />
            </Form.Group>
          </Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Year of Birth</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Year of Birth"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Area Interest</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Interest"
              onChange={this.props.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Row className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Time Zone</option>
              <option value="1">Pacific</option>
              <option value="2">Mountain</option>
              <option value="3">Central</option>
              <option value="3">Eastern</option>
            </Form.Select>
          </Row>
          <Button type="submit">Submit form</Button>
          <Button type="submit">Generate an Avatar</Button>
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
