import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import {  Row, Col } from 'react-grid';
import './list.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  

const List = (props) => {
const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => {
  setIsOpen(true);
};
const hideModal = () => {
  setIsOpen(false);
};

const { comments } = props;
if (!comments || comments.length === 0)
return <p>No Comments, sorry</p>;

return ( 

<Container fluid>
    <h2 className='list-head'>Available Comments</h2>
      {comments.map((comments) => {
        return (
         
  <Row>
   <Col>
    <Card   style={{ width: '15rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}} key={comments.id} className='list'>
    <Card.Body className="test">
    <Card.Title  className='repo-text'>{comments.title}</Card.Title>
    <Card.Text  style={{color:'#18183D'}} >{comments.message}</Card.Text>        
    <Card.Subtitle className="mb-2 text-muted">Posted by: {comments.user}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Posted On: {comments.date_created}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Updated On: {comments.date_updated}  </Card.Subtitle>    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }
    .btn-sm {
      padding: 0.1rem 0.5rem;
      font-size: 0.8rem;
    }
    .leave{
      color:
    }
    `}
  </style>
  <>
    <Button onClick={showModal} variant="flat" size="sm">
    Comment
    </Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>
            <h3 className='leave' style={{color:'#18183D'}}>Leave your comment </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
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