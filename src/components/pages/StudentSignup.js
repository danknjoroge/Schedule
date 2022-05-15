import React, {useState} from 'react'
import { connect } from 'react-redux'
import  PropTypes from "prop-types"
import { create_studentuser } from '../../actions/auth'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {  Row, Col } from 'react-grid';

const StudentSignup = ({create_studentuser, isAuthenticated,isStudent}) => {
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);
    const [student, setStudent]=useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const handleChange=(e)=>setStudent({
        ...student,
        [e.target.name]:e.target.value })
        
    const {username, email, password, password2}=student
     
   const handleSubmit=(e)=>{
       e.preventDefault();
       const newStudent={
           username,
           email,
           password,
           password2
       }
       console.log(newStudent)
    create_studentuser(newStudent)
   }
    if(isAuthenticated && isStudent){
        return <Redirect to="/staff"/>
    }
    return (
    <Row className='mt-5'>   
    <Col className="announcement"  sm={2} style={{background: "#18183D",height: "800px", color:"white", overflow: 'hidden',position:"fixed", }}>
            <li style={{listStyleType: "none"}} className='nav-item'> <hr />
              <Link to='/announcements' className='nav-links' >
                Notifications
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
<Col className=''  style={{marginLeft:'100px'}} sm={10}>
        <div className='container' style={{marginTop: "10%"}}>
            <h2 class="text-center fw-bold">| Add Student</h2>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={ e =>handleSubmit(e)}>
                        <div className='form-group mb-3'>
                            <label>username</label>
                            <input type='text'
                                 className='form-control' 
                                 name='username'
                                 value={username}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
         
                        <div className='form-group mb-3'>
                            <label>Email</label>
                            <input type='text'
                                 className='form-control' 
                                 name='email'
                                 value={email}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <div className='form-group mb-3'>
                            <label>password</label>
                            <input type='password'
                                 className='form-control' 
                                 name='password'
                                 value={password}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Confirm password</label>
                            <input type='text'
                                 className='form-control' 
                                 name='password2'
                                 value={password2}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <button type="submit" style={{backgroundColor: "#18183D",color:'white',fontWeight:'bold'}} className="btn ">ADD</button>
                    </form>
                </div>
            </div>
        </div>
        </Col>
    </Row>
    )
}

StudentSignup.propTypes={
    create_studentuser:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isStudent:PropTypes.bool
}


const mapStateToProps= state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isStudent:state.auth.isStudent,
})

export default  connect(mapStateToProps, {create_studentuser})(StudentSignup)