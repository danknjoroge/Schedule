import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Sessions</h1></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.message}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{contact.date_posted}</h6>
            {/* <p class="card-text">{contact.company.catchPhrase}</p> */}
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contacts