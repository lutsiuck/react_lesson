import React  from 'react';
import { connect } from 'react-redux';
import NewPost from "./NewPost"
import {addPost, setPosts} from "../../redux/addPost-reducer"

let mapStateToProps = (state) => {
    return{
        posts: state.postsPage.posts
    }
}

let mapDispatchToProps = {
    addPost,
    setPosts
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;