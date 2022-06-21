import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../CSS/About.css';

class About extends React.Component {
  render() {
    return (
      <>
        <h1>Team stillSwinging </h1>
        <CardGroup className='about'>
          <Card>
            <Card.Img className='about' variant="top" src="Images/Martha.jpeg" />
            <Card.Body>
              <Card.Title>Martha Quintanilla-Ramirez</Card.Title>
              <Card.Text>
                My name is Martha Quintanilla-Ramirez; I’m 28 years old. I am a software developer with a finance background in Seattle, WA! Before switching careers, I worked for a credit union where I was a Retail Experience Support Specialist. I assisted over 100 personal bankers where I utilized my problem-solving skills and attention to detail with complex transactions. While this field has taught me a lot and has been rewarding, I wanted shift careers and become a software developer to challenge myself. I want to showcase that I can succeed in the tech world and break down any myths/stereotypes regarding females in the tech industry. It is important to me to bring diversity to any team I work with to empower people from all walks of life. Technology is evolving rapidly, and I want to be a part of the growth and contribute in any way I can.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img className='about' variant="top" src="Images/Sarah.jpeg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img className='about' variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img className='about' variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      
      </>
    );
  }
}
export default About;
