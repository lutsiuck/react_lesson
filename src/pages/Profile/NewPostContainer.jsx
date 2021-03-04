import React  from 'react';
import { connect } from 'react-redux';
import NewPost from "./NewPost"
import {addPostActionCreator} from "../../redux/addPost-reducer"

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
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;