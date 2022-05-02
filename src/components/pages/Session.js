import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
const Sessions = () => {
    return (
<Container fluid>
  <Row >
    <Col sm={2} style={{background: "#18183D", color:"white", overflow: 'hidden',}} >
    <h3>All</h3>
    <Card.Link style={{color: "white"}}href="/student">Courses</Card.Link>   
    <h6>Add Sessions</h6>
    <Card.Link style={{color: "white"}}href="/about">Announcements</Card.Link>  
    </Col>
    <Col sm={10}><h2>| Todays Schedule</h2>
    <Row>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Ongoing Session</Card.Title>
    <Card.Text>
    Soft Skills
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
  </Button>
 
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title> Session 2</Card.Title>
    <Card.Text>
    11:00 - 12:00 pm
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
  </Button>
 
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Session 3</Card.Title>
    <Card.Text>
    12:00 - 1:00 pm
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
  </Button>
 
</Card.Body>
    </Card>
    </Col>
    </Row> 
    <Row>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title> Session 4</Card.Title>
    <Card.Text>
    1:00 - 2:00 pm
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
  </Button>
 
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title> Session 5</Card.Title>
    <Card.Text>
    2:00 - 3:00 pm
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
  </Button>
 
</Card.Body>
    </Card>
    </Col>
    <Col >
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title> Session 6</Card.Title>
    <Card.Text>
    3:00 - 4:00 pm
    </Card.Text>      
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    Live Link
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

export default Sessions;