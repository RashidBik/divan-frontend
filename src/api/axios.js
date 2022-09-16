import axios from "axios";

let instance= axios.create({
    headers: {
        accessToken: localStorage.getItem('accessToken')
    },
    // baseURL: 'https://divan.onrender.com'
    baseURL: 'http://localhost:8000'
})

export default instance