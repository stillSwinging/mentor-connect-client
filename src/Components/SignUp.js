import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      YOB: '',
      type: '',
      interest: '',
      timeZone: '',
      avatar: ''
    };
  }
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
  render() {
    return (
      <>
        <Form>
          {/* // noValidate validated={validated} onSubmit={handleSubmit}> */}
          <Row className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>I am registering as...</option>
              <option value="1">Student</option>
              <option value="2">Mentor</option>
            </Form.Select>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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
          <Button type="submit">Generate an Avatar</Button>
          <Button type="submit">Submit form</Button>
        </Form>
      </>
    );
  }
}


export default SignUp;
