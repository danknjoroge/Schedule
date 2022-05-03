// import React from "react";
// import "./Staff.css";


  
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://class-schedule-app00.herokuapp.com/api/announcements/?format=json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <h1 style={{textAlign: 'center', paddingTop: '10px'}}>Welcome To The Blog!</h1>
            {items.map(item => (
              <Row>
                <Card style={{ 
                  width: '100%',
                  margin: '10px'
                  }} key={item.id}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title style={{fontSize: '40px'}}>{item.title}</Card.Title>
                    <Card.Text>
                      {item.date_created}
                    </Card.Text>
                    <Card.Text> {item.message}</Card.Text>
                    <Button variant="primary" style={{
                      backgroundColor: 'darkgreen', 
                      border: 'darkgreen 1px solid'
                      }}>Read More</Button>
                  </Card.Body>
                </Card>
              </Row>
            ))}
          </Container>
        </div>
      );
    }
  }
}

export default App;