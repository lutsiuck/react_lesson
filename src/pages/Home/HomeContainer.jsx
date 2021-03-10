import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setPosts, setTotalPosts, toggleIsFetching } from '../../redux/addPost-reducer';
import Home from './Home';

let mapStateToProps = (state) => {
    return{
        posts: state.postsPage.posts,
        postsCount: state.postsPage.postsCount,
        pageLimit: state.postsPage.pageLimit,
        pageCurrent: state.postsPage.pageCurrent,
        isFetching: state.postsPage.isFetching
    }
}

let mapDispatchToProps = {
        setPosts,
        setCurrentPage,
        setTotalPosts,
        toggleIsFetching,
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;