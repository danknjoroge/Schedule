import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import './Comments.css';
import {  Row, Col } from 'react-grid';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const List = (props) => {
  const [comment, setComment]= useState("");
  const [date_posted, setDate]= useState("");
  const [announcement, setAnnouncement]= useState("");
  const [user, setUser]= useState("");
  const [message, setMessage]=useState("");

async function signup() {
  let item ={comment,date_posted,announcement,user}
  console.warn(item)

  let result = await  fetch("https://class-schedule-app00.herokuapp.com/comments/", {
      method: "POST",
        body: JSON.stringify(item),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    });
    let res = await result.json();
      if (result.status === 200) {
        setComment("");
        setDate("");
        setAnnouncement("");
        setUser("");
        setMessage("Your comment has been received!");
      } else {
        setMessage("Your comment has been received!");
      }
   

  };
 
// *

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
    <Container fluid >
      <Row >
      <Col className="item-container">
      {announcements.map((item,a,b,c,d,e) => {
        return (



    <Card key={item.id}  style={{ width: '15rem',borderRadius: '15px', backgroundColor: "#fff", border:"none", outline:"none"}}   className='card'>
    <Card.Body className="test">
    <Card.Title  className='repo-text'key={a}>{item.title}</Card.Title>
    <Card.Text className='repo-description' style={{color:'#18183D'}} key={b}>{item.message}</Card.Text>        
    <Card.Subtitle className="mb-2 text-muted"key={c}>Posted by: {item.user}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted"key={d}>Posted On: {moment(item.date_created).utc().format('YYYY-MM-DD')}</Card.Subtitle>

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
    `}
  </style>
  <>
    <Button onClick={showModal} variant="flat" size="sm">Comment</Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title><h1 style={{color:'#18183D'}}>Leave your comment </h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" className='formcontrol' placeholder='Comment' /><br />
        <input value={announcement} onChange={(e)=>setAnnouncement(e.target.value)} type="number" className='formcontrol' placeholder='Announcement' /><br />
        <input value={user} onChange={(e)=>setUser(e.target.value)} type="number" className='formcontrol' placeholder='User' /><br />
        <input value={date_posted} onChange={(e)=>setDate(e.target.value)} type="date" className='formcontrol' placeholder='Date' /><br />
        <Button onClick={signup} variant="flat" size="sm" type="submit">Submit</Button>
        <div style={{color:"#18183D"}} className="message">{message ? <p style={{color:"#18183D"}}>{message}</p> : null}</div>
      </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="flat" size="sm" onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
</Card.Body>
    </Card>
        );
      })}
       </Col>
      </Row>
          </Container>
  );
};
export default List;