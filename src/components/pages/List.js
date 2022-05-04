import React, { useState,Component } from 'react';
import { Container, Modal } from 'react-bootstrap';
import {  Row, Col } from 'react-grid';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  

const List = (props) => {
  const [name, setName] = useState("");
  const [date_posted, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://class-schedule-app00.herokuapp.com/comments/", {
        method: "POST",
          body: JSON.stringify({
          name: name,
          comment: comment,
          date_posted: date_posted,
          announcement:announcement,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setDate("");
        setComment("");

        setMessage("Your comment has been received!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
 

  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
 
  const { announcements } = props;
  if (!announcements || announcements.length === 0)
  return <p>No Announcements, sorry</p>;

  
 
 
  return (
    <Container fluid>
    <h2 className='list-head'>Available Announcements</h2>
      {announcements.map((announcements) => {
        return (
  <Row>
   <Col>
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}} key={announcements.id} className='list'>
    <Card.Body className="test">
    <Card.Title  className='repo-text'>{announcements.title}</Card.Title>
    <Card.Text style={{  color: "#18183D"}}className='repo-description'>{announcements.message}
    </Card.Text>        
    <Card.Subtitle className="mb-2 text-muted">Posted by: {announcements.user}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Posted On: {announcements.date_created}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Updated On: {announcements.date_updated}</Card.Subtitle>
   

   
    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 0.1rem 0.2rem;
      font-size: 0.8rem;
    }
    `}
  </style>

 
  <>
      <Button onClick={showModal} variant="flat" size="sm">
    Comment
  </Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      
       <input
          type="text"
          value={comment}
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
        />
       
        <Button variant="flat" size="sm" type="submit">Submit</Button>

        <div style={{color:"#18183D"}} className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="flat" size="sm" onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>



 
</Card.Body>
    </Card>
  
    </Col>
  
    </Row>

        );
      })}
          </Container>
  );
};
export default List;