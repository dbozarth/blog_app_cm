// Action Creator Syntax using axios and redux-promise

// redux-promise is configured in the main entry point file
// apllied as middleware.

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=donb9261';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// Adds the callback arguement to rerun the promise
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then (() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

// redux-promise acts as a middleware that will return a promise that when resolved will attach the
// response object to the payload. 

// axios handles the ajax portion