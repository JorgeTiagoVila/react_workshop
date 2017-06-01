import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser, sortUsersBy } from '../actions/users';
import { sortedUsers } from '../selectors/users';

import Users from '../components/Users';

const mapStateToProps = (state) => ({
    users: sortedUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addUser,
        sortUsersBy
    }, dispatch)
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
