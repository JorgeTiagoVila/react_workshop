import uuid from 'uuid/v4';

import { ADD_USER, SET_USER_SORT } from '../actions/users';

const initialState = {
    data: [],
    sortBy: 'firstName'
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const data = state.data.concat({
                id: uuid(),
                ...action.payload
            });

            return Object.assign({}, state, { data });
        }

        case SET_USER_SORT: {
            return Object.assign({}, state, { sortBy: action.payload });
        }

        default:
            return state;
    }
};

export default users;