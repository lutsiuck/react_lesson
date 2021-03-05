import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {users: state.usersPage}
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);