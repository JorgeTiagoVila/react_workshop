import uuid from 'uuid/v4';

import { ADD_USER } from '../actions/users';

const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return state.concat({
                id: uuid(),
                ...action.payload
            });

        default:
            return state;
    }
};

export default users;