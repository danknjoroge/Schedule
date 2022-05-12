import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Student from './components/pages/Student';
import StudentSignup from './components/pages/StudentSignup';
import Login from './components/pages/Login';
import Session from './components/pages/Session';
import Staff from './components/pages/Staff';
import Profile from './components/pages/Profile';
import Announcement from './components/pages/Announcement';
// import {GoogleLogin} from 'react-google-login';
import Comments from './components/pages/Comments';
import Schedule from './components/pages/Schedule';
import Sesion from './components/pages/Sesion';
// import AddSchedule from './components/pages/AddSchedule';
import Newstudent from './components/pages/Newstudent';


  
class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://class-schedule-app00.herokuapp.com/api/comments/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      this.setState({ sessions: data })
    })
    .catch(console.log)
  }

  render() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/announcements' component={StudentSignup} />
          <Route path='/announcement' component={Student} />
          <Route path='/login' component={Login} />
          <Route path='/session' component={Session} />
          <Route path='/staff' component={Staff} />

          <Route path='/schedule' component={Schedule} />
          <Route exact path='/sesion' component={Sesion} />

          <Route path='/profile' component={Profile} />
          <Route path='/comments' component={Comments} />
          <Route path='/newstudent' component={Newstudent} />
          <Announcement announcements={this.state.announcements} />
          <Session sessions={this.state.sessions} />
          <Staff staff={this.state.staff} />
          <Comments comments={this.state.comments} />
        </Switch>
      </Router>
    </>
  );
}
}

export default App;
