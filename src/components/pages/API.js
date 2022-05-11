import axios from 'axios';

export default axios.create({
    baseURL: "https://neapi.herokuapp.com/api/shedule/shedule/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})