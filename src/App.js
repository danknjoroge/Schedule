import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Student from './components/pages/Student';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Session from './components/pages/Session';
import Staff from './components/pages/Staff';
import Profile from './components/pages/Profile';
import Announcements from './components/pages/Announcements';

  
class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://class-schedule-app00.herokuapp.com/api/announcements/')
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
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
          <Route path='/student' component={Student} />
          <Route path='/login' component={Login} />
          <Route path='/session' component={Session} />
          <Route path='/staff' component={Staff} />
          <Route path='/profile' component={Profile} />
          <Announcements announcements={this.state.announcements} />
          <Session sessions={this.state.sessions} />

        </Switch>
      </Router>
    </>
  );
}
}

export default App;
