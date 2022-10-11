import axios from 'axios'

export const API = 'https://young-shelf-16942.herokuapp.com'

export const api = axios.create({
    baseURL: API,
});