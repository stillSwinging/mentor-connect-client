import React from 'react';
import Body from '../Components/Body';
import Simple from '../Components/Simple';

class Home extends React.Component {
  render() {
    return (
      // adding fragments so i can import the simple.js and body, this is so the home page photos do not render on every single other component -Tanesha Brester
      <>
        <div>
          <h1>Mentor Matcher</h1>
        </div>
        {/* if you want to re-arrange the photos you can swap the order of the Body and Simple tags - Tanesha Brester */}
        <Body></Body>
        <Simple></Simple>
  
      
      </>
    );
  }
}

export default Home;
