import React from "react";
import './Announcement.css';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  





const Announcement = () => {
    return (
<Container fluid>

  <Row>   
  <Col  sm={2} style={{background: "#18183D", color:"white", overflow: 'hidden',}}>
    <h3>All</h3>
    <Card.Link style={{color: "white"}}href="/student">Courses</Card.Link>   
    <h6>Students</h6>
    <Card.Link style={{color: "white"}}href="/sessions">Sessions</Card.Link> 

 
  </Col>
  <Col sm={10}><h2>| Announcements</h2>
    <Row>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>

  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        
    <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>
    
 
  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>
    
  
  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
   </Col>
    </Row> 
    <Row>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>
    
  

  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>
    
 

  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Career Day</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>        <Card.Subtitle className="mb-2 text-muted">Posted by: Jason</Card.Subtitle>

    <Card.Subtitle className="mb-2 text-muted">On: 26/04/2022</Card.Subtitle>
    
 

  <Button variant="flat" size="sm">
    Comment
  </Button>
  <Button variant="flat" size="sm">
    Like
  </Button>
</Card.Body>
    </Card>
   </Col>
    </Row> 

    
  </Col>
    
  </Row>
</Container>


    );
};

export default Announcement;

