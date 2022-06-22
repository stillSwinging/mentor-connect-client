import React from 'react';
import '../CSS/Mission.css';
import Card from 'react-bootstrap/Card';

// import Modal from 'react-bootstrap/Modal';

class Mission extends React.Component {
  render() {
    return (
      // parent element needed for jsx (i just used fragments)
      <div id="statementsection">
       
        <h2>Our Mission</h2>
        <Card.Body>
          <Card.Title></Card.Title>
          <div class='statement1'></div>
          <Card.Text>
          MentorMatchers mission is to create opportunities for youth 18 and under to connect with mentors who are currently in their desired career fields. Created with accessibility in mind, there is no cost for youth to utilize this virtual resource. <Card.Text/>
            <div/>
            <br/>
            <Card.Text>Lack of accessibility and visibility is one of the biggest barriers for youth and young adults within underrepresented communities. We recognized a severe lack of diverse representation across a wide variety of professional backgrounds and want to be part of the solution of building a more equitable future.</Card.Text>
            <br/>
            <Card.Text>
          Studies have shown that more diversity within the workforce is strongly linked to increased efficiency, creativity and overall innovation. Companies with more diversity across all position levels are able to create a ripple effect and have a positive impact on underrepresented, or systemically excluded communities. This diversity is intersectional in regards to ethnicity, socioeconomic status, gender, and those with varied accessibility needs.
            </Card.Text>

          </Card.Text>
        </Card.Body>
      </div>
    );
  }
}
export default Mission;
