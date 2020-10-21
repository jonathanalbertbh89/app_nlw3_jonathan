import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://192.168.0.104:3333'
})

export default connection