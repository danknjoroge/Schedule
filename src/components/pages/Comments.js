import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {  Row, Col } from 'react-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import './Comments.css';


export default function UsersData() {
  const [comments, fetchComments] = useState([])

  const getData = () => {
    fetch('https://class-schedule-app00.herokuapp.com/comments/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchComments(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container fluid>
    <Row style={{marginTop: "6rem"}}>
      <Col className="item-container">
      {comments.map((item,i,j,k,l) => {
        return (
          <Card style={{ width: '15rem',borderRadius: '15px', backgroundColor: "#fff", border: "none", outline: "none"}}  className='card' key={item.id}>
          <Card.Body className="test">
          <Card.Title  className='repo-text' style={{color:"black"}} key={i}>{item.comment}</Card.Title>
          <Card.Text className='repo-description'key={j} style={{color:'#18183D'}}>{item.announcement}</Card.Text>        
          <Card.Subtitle className="mb-2 text-muted" key={k}>Posted by: {item.user}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted" key={l}>On: {item.date_posted}</Card.Subtitle>
          </Card.Body>
          </Card>
     )
   })} 
      </Col>
    </Row>

    </Container>
  )
}