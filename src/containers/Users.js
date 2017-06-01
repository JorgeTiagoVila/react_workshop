import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser, sortUsersBy } from '../actions/users';

import Users from '../components/Users';

const mapStateToProps = (state) => ({
    users: state.users.data.sort(
        (userA, userB) => userA[state.users.sortBy].localeCompare(userB[state.users.sortBy]))
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addUser,
        sortUsersBy
    }, dispatch)
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
