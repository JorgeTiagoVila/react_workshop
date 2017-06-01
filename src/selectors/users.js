import { createSelector } from 'reselect';

export const dataSelector = (state) => state.users.data;

export const sortBySelector = (state) => state.users.sortBy;

export const sortedUsers = createSelector(
    dataSelector,
    sortBySelector,
    (data, sortBy) => {
        const sortedData = Array.from(data);
        sortedData.sort((userA, userB) => userA[sortBy].localeCompare(userB[sortBy]));
        return sortedData;
    }
);
