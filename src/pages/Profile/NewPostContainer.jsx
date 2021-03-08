import React  from 'react';
import { connect } from 'react-redux';
import NewPost from "./NewPost"
import {addPostActionCreator, setPostAC} from "../../redux/addPost-reducer"

let mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (title, desc) => {
            dispatch(addPostActionCreator(title, desc))
        },
        setPost: (posts) => {
            dispatch(setPostAC(posts))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;