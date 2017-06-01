import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../actions/users';

import Users from '../components/Users';

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addUser
    }, dispatch)
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
