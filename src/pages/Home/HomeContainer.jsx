import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

let mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer;