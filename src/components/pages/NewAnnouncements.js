import './Announcement.css';
import React,{useState} from 'react';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';




const New = () => {
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);
const [title, setTitle]= useState("");
const [message, setMessage]= useState("");
const [success, setSuccess]=useState("");

async function submit() {
  let item ={title,message}
  console.warn(item)

  let result = await  fetch('https://class-schedule-app00.herokuapp.com/getannouncements/', {
      method: "POST",
        body: JSON.stringify(item),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    });

    let res = await result.json();
      if (result.status === 200) {

            setTitle("");
            setMessage("");
        
            setSuccess("Your announcement has been received!");
      } else {
        setSuccess("Error");
      }
      // setTitle("");
      // setMessage("");
      setSuccess("Your announcement has been received!");

   

  };

    return (
<Container fluid >


<Row className='mt-5'>   
<Col className="announcement"  sm={2} style={{background: "#18183D",height: "800px", color:"white", overflow: 'hidden',position:"fixed", }}>
            <li style={{listStyleType: "none"}} className='nav-item'> <hr />
              <Link to='/announcements' className='nav-links' >
                Announcements
              </Link>
            </li>
            <li style={{listStyleType: "none"}} className='nav-item'>  <hr />
              <Link to='/sesion' className='nav-links' >
                Sessions
              </Link>
            </li>
          

            <li style={{listStyleType: "none"}} className='nav-item'> <hr />
              <Link
                to='/schedule'
                className='nav-links'
               
              >
                Schedule
              </Link>
            </li> <hr />

            <li className='nav-item' style={{listStyleType: "none"}}>
            
              {auth.isStudent ? null : <>
                <Link to='/addstudent' className='nav-links' >
                Add Student
              </Link>
              
           </>
             }

            </li>
            <li className='nav-item' style={{listStyleType: "none"}}>
            
              {auth.isStudent ? null : <>
                <Link to='/newannouncement' className='nav-links' >
                Add Announcement
              </Link>
              
           </>
             }

            </li>
         

</Col>
<Col className='mt-5'  style={{marginLeft:'100px'}} sm={10}>
<div style={{marginLeft:'400px'}} >
<h2 className="fw-bold mb-4">| New Announcement</h2>

        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='formcontrol mt-4' placeholder='Title' /><br />
        <input value={message} onChange={(e)=>setMessage(e.target.value)} style={{height:'50px'}} type="text" className='formcontrol' placeholder='Message' Row/><br />
        <Button onClick={submit} className='btn'style={{background: "#18183D",color:"white"}}>Submit</Button>
        <div style={{color:"#18183D"}} className="message">{success ? <p style={{color:"#18183D"}}>{success}</p> : null}</div>
             
    </div>
</Col>  
</Row>
</Container>



    );
};
export default New;