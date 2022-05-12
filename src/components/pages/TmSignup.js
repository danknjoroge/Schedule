
import React, {useState} from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {create_tmuser} from "../actions/auth"
import {Redirect} from "react-router-dom"

const TmSignup = ({create_tmuser, isAuthenticated, isStudent}) => {
    const [tm, setTm]=useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const handleChange=(e)=>setTm({
        ...tm,
        [e.target.name]:e.target.value })
        
    const {username, email, password, password2}=tm
    const handleSubmit=(e)=>{
        e.preventDefault();
        //implement the register logic
        const newUser={
           username,
           email,
           password,
           password2
       }
       create_tmuser(newUser)
    }
    if(isAuthenticated  && !isStudent){
        return <Redirect to="/tm/dashboard" />
    } 
    return (
        <div className='container' style={{marginTop: "10%"}}>
            <h2>signup and start Teaching</h2>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={e => handleSubmit(e)}>
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
                            <input type='text'
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
                        <button type="submit" className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
TmSignup.propTypes={
    create_tmuser:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isStudent:PropTypes.bool
}

const mapStateToProps =state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isStudent:state.auth.isStudent
})

export default connect(mapStateToProps, {create_tmuser})( TmSignup)