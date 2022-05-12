import axios from "axios";
import { 
     LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_CUSER_SUCCESS, REGISTER_CUSER_FAILED, LOGOUT_SUCCESS
} from "../actions/type"


    

export const create_studentuser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('https://neapi.herokuapp.com/api/signup/student/', body, config)
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



export const login=({username, password})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, password})

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
    axios.post('http://127.0.0.1:8000/api/logout/', null, config)
    .then(res =>{
        dispatch({
            type:LOGOUT_SUCCESS
        })
    }).catch(err =>{
        console.log(err.response.data)
    })
}
