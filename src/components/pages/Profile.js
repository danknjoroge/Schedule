import React, { Component } from 'react'
import './Announcement.css';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from 'react-user-profile';
import $ from 'jquery';

 
class Profile extends Component {
  render() {
    const photo = 'https://cdn.wallpapersafari.com/45/7/7ed5AD.jpg'
    const userName = 'Joan Adhiambo'
    const location = 'Nairobi,Kenya'
 
    const comments = [
      {
        id: '1',
        photo: 'https://cdn.wallpapersafari.com/45/7/7ed5AD.jpg',
        userName: 'Lenny Rono',
        content: 'This is awesome',
        createdAt: 22052022,
      }
    ]
 
    return (
      <Container fluid>
        <Row>
      <Col>
      <div style={{ marginTop: '100px', width: '100%' }}>
            

            <UserProfile style={{ color:'#18183D'}}photo={photo} userName={userName} location={location} initialLikesCount={5} initialFollowingCount={7} initialFollowersCount={4} initialComments={comments} />
          </div>
      </Col>
        </Row>
      </Container>
      
     
    )
  }
}
 
export default Profile;