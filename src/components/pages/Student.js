import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'  

const Student = () => {
    return (
<Container fluid>
  <Row>
    <Col sm={2} style={{background: "#18183D", color:"white", overflow: 'hidden',}} >
    <h3>All</h3> 
    <Card.Link style={{color: "white"}}href="/student">Courses</Card.Link>   
    <h6>Students</h6>
    <Card.Link style={{color: "white"}}href="/sessions">Sessions</Card.Link>   



    </Col>
    <Col sm={10}>
        <h3 style={{textAlign:'center'}}>Courses</h3>
        <h4  style={{background: "#18183D", borderRadius: '15px',color:"white",textAlign:'center', overflow: 'hidden',}} >Become a professional in just 25 weeks!</h4>
   <Row>
   <Col>
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Finance  & Accounting</Card.Title>
    <Card.Text>
    90% employment rate according to the market.
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
    Take Course
  </Button>

</Card.Body>
    </Card>

    </Col>   
    <Col>
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Software Engineering</Card.Title>
    <Card.Text>
    92.1% employment rate according to the market.
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
    Take Course
  </Button>

</Card.Body>
    </Card>

    </Col> 
    <Col>
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Data <br></br> Science</Card.Title>
    <Card.Text>
    89% employment rate according to the market.
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
    Take Course
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

export default Student;