import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Student from './components/pages/Student';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Announcement from './components/pages/Announcement';
import Login from './components/pages/Login';
import Session from './components/pages/Session';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={SignUp} />
          <Route path='/announcement' component={Announcement} />
          <Route path='/student' component={Student} />
          <Route path='/login' component={Login} />
          <Route path='/session' component={Session} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
