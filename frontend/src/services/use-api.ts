import axios from 'axios';

export const useApi = () => {
    return axios.create({
        baseURL: 'http://localhost:3001/'
    })
};