export const ADD_USER = 'ADD_USER';
export const SET_USER_SORT = 'SET_USER_SORT';

export const addUser = (firstName, lastName) => ({
    type: ADD_USER,
    payload: {
        firstName,
        lastName
    }
});

export const sortUsersBy = (field) => ({
    type: SET_USER_SORT,
    payload: field
});
