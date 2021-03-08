import React from 'react';
import { connect } from 'react-redux';
import { setPostAC } from '../../redux/addPost-reducer';
import Home from './Home';

let mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setPosts: (posts) => {
            return dispatch(setPostAC(posts))
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;