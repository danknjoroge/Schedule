import React from 'react'

const Announcements = ({ announcements }) => {
  return (
    <div>
      <center><h1>Announcements</h1></center>
      {announcements.map((announcement) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{announcement.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{announcement.message}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{announcement.date_posted}</h6>
            {/* <p class="card-text">{contact.company.catchPhrase}</p> */}
          </div>
        </div>
      ))}
    </div>
  )
};

export default Announcements