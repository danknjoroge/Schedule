
import axios from 'axios';

export default axios.create({
    baseURL: "https://neapi.herokuapp.com/api/shedule/session/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})