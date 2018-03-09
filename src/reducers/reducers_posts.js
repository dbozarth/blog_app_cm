// !!!!!YOU MUST RETURN THE CASES!!!!!!!

import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
        // ES6 --- Sqaure brackets are key interpolation to create the key for the key value pair
        return { ...state, [action.payload.data.id]: action.payload.data };
    default:
        return state;
    };
};