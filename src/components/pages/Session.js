import React, { Component } from 'react';
import './Session.css'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios';

function Session() {

  const responseGoogle = response => {
    console.log(response)
    const { code } = response
    axios.post('http://localhost:4000/api/create-tokens', { code })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error.message))
  }

  const responseError = error => {
    console.log(error)
  }

  return (
      <div>
        <div className="App">
          <h1>Add Sessions and Events</h1>
          </div>
            <div>
              <GoogleLogin 
                  clientId="708105023641-t350k3usoo751tfnilu9hrdokjmmli8v.apps.googleusercontent.com"
                  buttonText="Add sessions and events"
                  onSuccess={responseGoogle}
                  onFailure={responseError}
                  cookiePolicy={'single_host_origin'}

                  responseType="code"
                  accessType="offline"
                  scope="openid email profile https://www.googleapis.com/auth/calendar"
                  />
      </div>
  </div>
  )
}

export default Session
