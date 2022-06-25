import React from 'react';
import { Figure } from 'react-bootstrap';
import 'react-bootstrap/Figure';
// import Figure from 'react-bootstrap/Figure'
import '../CSS/Body.css';

class Body extends React.Component {
  render() {
    return (
      <div className='hero'>
        <div className='Container'>
          <div>
          </div>
          <div className='para'>
            <Figure>
              <Figure.Caption className='p'>
                <h4>Our Mission</h4>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
