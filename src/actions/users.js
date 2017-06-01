export const ADD_USER = 'ADD_USER';

export const addUser = (firstName, lastName) => ({
    type: ADD_USER,
    payload: {
        firstName,
        lastName
    }
});
