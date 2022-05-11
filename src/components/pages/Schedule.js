import React from 'react'
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch} from 'react-redux';
import { Button, Form } from "react-bootstrap";
import API from "./API";


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
  // const onSub=(e)=>{
  //   e.target.reset();
  // }
  const onSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    let item = { day, details, time };
    API.post("/", item).then(() => refreshShedules());
  };

  const onUpdate = (id) => {
    let item = { day };
    API.patch(`/${id}/`, item).then((res) => refreshShedules());
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



  return (
    <div>
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Add A New Shedule </h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicDay">
              <Form.Label>{sheduleId}Shedule Day</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDetails">
              <Form.Label>Details</Form.Label>
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
                variant="primary"
                type="button"
                onClick={() => onUpdate(sheduleId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Day</th>
                <th scope="col">Details</th>
                <th scope="col">Time</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {shedules.map((shedule, index) => {
                return (
                  <tr key="">
                    <th scope="row">{shedule.id}</th>
                    <td> {shedule.day}</td>
                    <td>{shedule.details}</td>
                    <td>{shedule.time}</td>
                    {auth.isTm ? <>
                    
                    </>:<></>}
                    <td>
                       
                    <button onClick={() => selectShedule(shedule.id)}>Edit</button>
                      <button onClick={() => onDelete(shedule.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddSchedule