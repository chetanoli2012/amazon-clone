import axios from 'axios';

/**
 * baseURL here is the API(cloud fuction) url
 */
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-6de06/us-central1/api'
})

export default instance;