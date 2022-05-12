import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'  
import './Student.css'

const Student = () => {
    return (
<Container fluid  style={{ height: "700px" }}>
  <Row style={{ height: "100%", marginLeft:"-2rem" }}>
    <Col sm={2} style={{background: "#18183D", color:"white", overflow: 'hidden', position:"fixed", marginTop: "4.5rem", height: "100%" }} >
    <h3 style={{marginLeft: "30%", paddingTop: "10%"}}>All</h3> 
 
    <h6 style={{marginLeft: "20%", paddingTop: "10%"}}>Students</h6>
    <Card.Link style={{color: "white", textDecoration: "none", marginLeft: "20%"}}href="/sessions">Sessions</Card.Link>   

    </Col>
    <Col sm={10} style={{marginLeft: "17%", marginTop: "5%"}}>
        <h3 style={{textAlign:'center', marginTop: "2%"}}>Announcement</h3>
        <h4  style={{background: "#18183D", borderRadius: '15px',color:"white",textAlign:'center', overflow: 'hidden',}} >Become a professional in just 25 weeks!</h4>
   <Row> <br /><hr />
  <Col>
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#fff", outline: "none", border: "none", marginTop: "2rem"}}>
  <Card.Body className="test">
    <Card.Title>Finance  & Accounting</Card.Title>
    <Card.Text style={{color: "#18183d"}}>
    90% employment rate according to the market.
    </Card.Text>   

  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 0.1rem 0.5rem;
      font-size: 0.9rem;
    }

    .test{

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
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#fff", outline: "none", border: "none", marginTop: "2rem"}}>
  <Card.Body className="test">
    <Card.Title>Software Engineering</Card.Title>
    <Card.Text style={{color: "#18183d"}}>
    92.1% employment rate according to the market.
    </Card.Text>   
    
 

  <Button variant="flat" size="sm">
    Take Course
  </Button>

</Card.Body>
    </Card>

    </Col> 
    <Col>
   <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#fff", outline: "none", border: "none", marginTop: "2rem"}}>
  <Card.Body className="test">
    <Card.Title>Data <br></br> Science</Card.Title>
    <Card.Text style={{color: "#18183d"}}>
    89% employment rate according to the market.
    </Card.Text>   
    

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