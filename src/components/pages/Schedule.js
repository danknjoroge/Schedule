import React from 'react'
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch} from 'react-redux';
import { Button, Form } from "react-bootstrap";
import API from "./API";
import './Schedule.css';
import './Comments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Modal } from 'react-bootstrap';


const AddSchedule = () => {
  const [day, setDay] = useState("");
  const [details, setDetails] = useState("");
  const [time, setTime] = useState("");
  const [sheduleId, setSheduleId] = useState(null);
  const [shedules, setShedules] = useState([]);

  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

  useEffect(() => {
    refreshShedules();
  }, []);

  const refreshShedules = () => {
    API.get("/")
      .then((res) => {
        setShedules(res.data);
      })
      .catch(console.error);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    let item = { day, details, time };
    API.post("/", item).then(() => refreshShedules());
    setDay("")
    setDetails("")
    setTime("")
  };

  const onUpdate = (id) => {
    let item = { day, details, time };
    API.patch(`/${id}/`, item).then((res) => refreshShedules());
    setDay("")
    setDetails("")
    setTime("")
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshShedules());
  };
  function selectShedule(id) {
    let item = shedules.filter((shedule) => shedule.id === id)[0];
    setDay(item.day);
    setDetails(item.details);
    setTime(item.time);
    setSheduleId(item.id);
  }


  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <div className="container mt-5" >
      <div className="row">
      {auth.isStudent ? null:<>
        <div className="col-md-4 mt-5 fom">
        
        <Button onClick={showModal} className='btn btn-primary'> Add a New Schedule</Button>
        <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title><h1>New Schedule </h1></Modal.Title>
        </Modal.Header>
          <Form onSubmit={onSubmit} className="mt-4" style={{padding:'10px',backgroundColor:'whitesmoke'}}>
            <Form.Group className="mb-3 " controlId="formBasicDay">
              <Form.Label>{sheduleId}Schedule Day</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDetails">
              <Form.Label>Activity</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Label> Schedule Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
              onClick={showModal} 
                variant="primary"
                type="button"
                onClick={() => onUpdate(sheduleId)}
                className="mx-2"
              >
                Update
              </Button>
              <Button
                variant="danger"
                type="button"
                onClick={hideModal}
                className="mx-2"
              >
                Close
              </Button>
            </div>
          </Form>
          </Modal>

        </div>
        </>}
        <div className="col-md-12 mt-5">
          <div className='row'>
            <div  className="col-md-2" ></div>
            <div  className="col-md-8">
            
            <h3>The Schedule</h3>
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Day</th>
                <th scope="col">Activity</th>
                <th scope="col">Time</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {shedules.map((shedule, index) => {
                return (
                  <tr  key="">
                    <th scope="row">{shedule.id}</th>
                    <td> {shedule.day}</td>
                    <td className='edit'>{shedule.details}</td>
                    <td>{shedule.time}</td>
                    <td>
                    {auth.isStudent ? null: <>
                      <Button
                variant="secondary"
                type="button"
                onClick={
                  () =>{
                    selectShedule(shedule.id)
                    showModal()
                   } 
                       }
                className="mx-2"
              >
                Edit
                      </Button>
                      <Button
                        variant="danger"
                        type="button"
                        onClick={() => onDelete(shedule.id)} 
                        className="mx-2"
                      >
                        Delete
                      </Button>
                      </>}
                    
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table></div>
            <div  className="col-md-2"></div>

          </div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddSchedule;