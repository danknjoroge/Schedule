import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch} from 'react-redux';
import { Button, Form , Card} from "react-bootstrap";
import API from "./APL";
import './session.css';



const Sesion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const [sessionId, setSessionId] = useState(null);
  const [sessions, setSessions] = useState([]);

  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

  useEffect(() => {
    refreshSessions();
  }, []);

  const refreshSessions = () => {
    API.get("/")
      .then((res) => {
        setSessions(res.data);
      })
      .catch(console.error);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    let item = { title, description, date, time, link };
    API.post("/", item).then(() => refreshSessions());
    setTitle("")
    setDescription("")
    setDate("")
    setTime("")
    setLink("")
  };

  const onUpdate = (id) => {
    let item = { title, description, date, time, link };
    API.patch(`/${id}/`, item).then((res) => refreshSessions());
    setTitle("")
    setDescription("")
    setDate("")
    setTime("")
    setLink("")
  }
  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshSessions());
  };
  function selectSession(id) {
    let item = sessions.filter((session) => session.id === id)[0];
    setTitle(item.title);
    setDescription(item.description);
    setDate(item.date);
    setTime(item.time);
    setLink(item.link);
    setSessionId(item.id);
  }



  return (
    <div>
        <div className="container mt-5">
      <div className="row">
      {auth.isStudent ? null:<>
        <div className="col-md-4 mt-5">
        
          <h3 className="float-left mt-4">Add A New Session </h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>{sessionId}Session Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDetscription">
              <Form.Label>Session Details</Form.Label>
              <Form.Control as="textarea" rows={3}
                type="textarea"
                placeholder="Enter Session Details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label> Select Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Label> Session Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLink">
              <Form.Label> Session Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Time"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(sessionId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
          
        </div>
        </>}
        <div className="col-md-8 mt-5">
          <h3 className="float-left mt-4">Available Sessions </h3>
          <div className="row">
          {/* <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Title</th>
                <th scope="col">Session Details</th>
                <th scope="col">Session Date</th>
                <th scope="col">Time</th>
                <th scope="col">Session Link</th>
              </tr>
            </thead>
            <tbody> */}
              {sessions.map((session, index) => {
                
                return (

                  
                  <>
                  {/* <tr key="">
                    <th scope="row">{session.id}</th>
                    <td> {session.title}</td>
                    <td>{session.description}</td>
                    <td>{session.date}</td>
                    <td>{session.time}</td>
                    <td>{session.link}</td>







                    <td>
                      {auth.isStudent ? null : <>
                        <Button
                          variant="secondary"
                          type="button"
                          onClick={() => selectSession(session.id)}
                          className="mx-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          type="button"
                          onClick={() => onDelete(session.id)}
                          className="mx-2"
                        >
                          Delete
                        </Button>
                      </>}

                    </td>
                  </tr> */}
                  <div className="col-md-6 mt-3">
                  <Card className="text-center card m-2">
                    <Card.Header>{session.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>Session Details</Card.Title>
                      {session.description} <br/>
                      <h4>Date</h4>
                      {session.date} <br/>
                      <h4>Time</h4>
                      {session.time} <br/>
                      <Card.Text>{session.description}  </Card.Text>
                      <Card.Text>{session.time}</Card.Text>
                      <a className="btn btn-primary" href="{session.link}">Join Session</a>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <Card.Footer className="bg-default ">
                    {auth.isStudent ? null : <>
                        <Button
                          variant="secondary"
                          type="button"
                          onClick={() => selectSession(session.id)}
                          className="mx-2"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          type="button"
                          onClick={() => onDelete(session.id)}
                          className="mx-2"
                        >
                          Delete
                        </Button>
                      </>}
                    </Card.Footer>
                  </Card>
                  </div>
                    </>
                );
                
              })}
            {/* </tbody>
          </table> */}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sesion