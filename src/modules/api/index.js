import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://api.my-events.site/api/v1',
    headers: {
        accept: 'application/json',
    },
});
