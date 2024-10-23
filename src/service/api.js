import axios from "axios"

const api = axios.create({

    baseURL: 'http://localhost:8080/academico/api/v1/'
    //baseURL: 'http://172.19.0.49/pizzariateste/api/v1/'
})

export default api