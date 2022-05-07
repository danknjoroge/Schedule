
  
import axios from "axios";
import { STUDENT_USER_LOADED, STUDENT_USER_FAILED, TM_USER_LOADED,
    TM_USER_FAILED, LOGIN_SUCCESS, LOGIN_FAILED,LOGOUT_SUCCESS, REGISTER_FUSER_SUCCESS,
    REGISTER_FUSER_FAILED, REGISTER_CUSER_SUCCESS, REGISTER_CUSER_FAILED
} from "../actions/type"


export const getStudentUser=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const is_student=getState().auth.isStudent
    const config={
        headers:{
            'Content-type':'application/json'
        }
    }

    if(token && is_student){
        config.headers['Authorization']=`Token ${token}`  
    }
    axios.get('https://neapi.herokuapp.com/api/student/dashboard/', config)
    .then(res =>{
        dispatch({
            type:STUDENT_USER_LOADED,
            payload:res.data
        })
    }).catch(err =>{
        dispatch({
            type:STUDENT_USER_FAILED
        })
    })
}



export const getTmUser = ()=>(dispatch, getState)=>{
    const token=getState().auth.token;
    const is_student=getState().auth.isStudent
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(token && !is_student){
        config.headers['Authorization']=`Token ${token}`
    }

    axios.get('https://neapi.herokuapp.com/api/tm/dashboard/', config)
      .then(res =>{
          dispatch({
              type:TM_USER_LOADED,
              payload:res.data
          })
      }).catch(err => {
          dispatch({
              type:TM_USER_FAILED
          })
      })
}
        

export const create_studentuser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('https://neapi.herokuapp.com/api/student/tm/', body, config)
    .then(res =>{
        dispatch({
            type:REGISTER_CUSER_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err =>{
        dispatch({
            type:REGISTER_CUSER_FAILED
        })
        console.log(err.response.data)
    })

    
}


export const create_tmuser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('https://neapi.herokuapp.com/api/signup/tm/', body, config)
    .then(res =>{
        dispatch({
            type:REGISTER_FUSER_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err =>{
        dispatch({
            type:REGISTER_FUSER_FAILED
        })
        console.log(err.response.data)
    })

    
}


export const login=({username, password})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, password})
    // axios.post('https://class-schedule-app00.herokuapp.com/login/', body, config)

    axios.post('https://neapi.herokuapp.com/api/login/', body, config)
    .then(response =>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:response.data
        })
    }).catch(err =>{
        dispatch({
            type:LOGIN_FAILED
        })
    })

}


export const logout=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(token){
        config.headers['Authorization']= `Token ${token}`
    }
    axios.post('https://neapi.herokuapp.com/api/logout/tm/', null, config)
    .then(res =>{
        dispatch({
            type:LOGOUT_SUCCESS
        })
    }).catch(err =>{
        console.log(err.response.data)
    })
}