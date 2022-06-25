import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import '../CSS/About.css';

class About extends React.Component { // creating AboutUs react class component -Tanesha Brester
  render() {
    return ( // parent element needed for jsx (i just used fragments) -Tanesha Brester
      <>
        <h1>Team stillSwinging </h1>
        <CardGroup className='about'>
          <Card className='martha'>
            <Card.Img className='about' id='Team' variant="top" src="Images/Martha.jpeg" />
            <Card.Body className=''>
              <Card.Title>Martha Quintanilla-Ramirez</Card.Title>
              <Card.Text id='text'>
                My name is Martha Quintanilla-Ramirez; I’m 28 years old. I am a software developer with a finance background in Seattle, WA! Before switching careers, I worked for a credit union where I was a Retail Experience Support Specialist. I assisted over 100 personal bankers where I utilized my problem-solving skills and attention to detail with complex transactions. While this field has taught me a lot and has been rewarding, I wanted shift careers and become a software developer to challenge myself. I want to showcase that I can succeed in the tech world and break down any myths/stereotypes regarding females in the tech industry. It is important to me to bring diversity to any team I work with to empower people from all walks of life. Technology is evolving rapidly, and I want to be a part of the growth and contribute in any way I can.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className='about' id='Team' variant="top" src="Images/Sarah.jpeg" />
            <Card.Body>
              <Card.Title>Sarah Teklemariam</Card.Title>
              <Card.Text>
                Hello everyone. Thank you all for joining us today. My name is Sarah Teklemariam.I am a software developer. I have an associate in tourism and hotel management. Before code fellows I was working as a nurse assistant and I also have more than 7 years of experience in customer service.I am looking for a job as a software developer. Because I will be using the tools and skills to provide solutions for users problems. My goal is to work for a company on a variety of projects and challenge myself and use that opportunity to learn about new technologies, different systems and explore various parts of the tech industry.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className='about' id='Team' variant="top" src="Images/Vida.jpg" />
            <Card.Body>
              <Card.Title>Vida Powell</Card.Title>
              <Card.Text>
                Presently a pandemic-inspired K-2 homeschool teacher and long-time Trekkie, Vida is an avid fan of puppies of all ages and life in VR. Having completed her Bachelor of Science in Interdisciplinary Studies (English/Mathematics), Associate of Science in pure sciences, and a bartending certification back when she enjoyed leaving the house, she is currently working toward an Advanced Software Development certification in Full-Stack JavaScript.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className='about' id='Team' variant="top" src="Images/Tanesha2.jpg" />
            <Card.Body>
              <Card.Title>Tanesha Brester</Card.Title>
              <Card.Text>
              With a diverse employment background, most recently being in healthcare, I decided to follow my dreams and pivot into tech. I went back to school in 2020, and enrolled in CodeFellows in January 2022. My passion is working towards creating progressive and accessible solutions for systemically oppressed and marginalized communities.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}
export default About;
