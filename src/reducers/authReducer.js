import { STUDENT_USER_LOADED, STUDENT_USER_FAILED, TM_USER_LOADED,
    TM_USER_FAILED, LOGIN_SUCCESS, LOGIN_FAILED,LOGOUT_SUCCESS, REGISTER_FUSER_SUCCESS,
    REGISTER_FUSER_FAILED, REGISTER_CUSER_SUCCESS, REGISTER_CUSER_FAILED
} from "../actions/type"

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isStudent:null,
    isLoading:false,
    user:null
}

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case REGISTER_CUSER_SUCCESS:
        case REGISTER_FUSER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isStudent:action.payload.user.is_student,
                isLoading:false
            }
        case STUDENT_USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isStudent:true,
                user:action.payload
            }
            case TM_USER_LOADED:
                return {
                    ...state,
                    isAuthenticated:true,
                    isLoading:false,
                    isStudent:false,
                    user:action.payload
                }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
                isStudent:action.payload.is_student,
                
            }

        case REGISTER_CUSER_FAILED:
        case REGISTER_FUSER_FAILED:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isStudent:null,
                isAuthenticated:false,
                isLoading:false
            }

            case STUDENT_USER_FAILED:
            case TM_USER_FAILED:
            case LOGOUT_SUCCESS:
                localStorage.removeItem('token')
                return {
                    ...state,
                    token:null,
                    isStudent:null,
                    isAuthenticated:false,
                    isLoading:false,
                }
    }
    return state;
}


export default authReducer