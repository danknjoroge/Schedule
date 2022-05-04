import React from 'react'

const Sessions = ({ contacts }) => {
  return (
    <div>
      <center><h1>Sessions</h1></center>
      {contacts.map((sessions) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{sessions.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{sessions.name}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{sessions.time}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Sessions