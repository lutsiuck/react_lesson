const ADD_POST = 'ADD_POST';
const SET_POSTS = 'SET_POSTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_POSTS = 'SET_TOTAL_POSTS'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'

let statePosts = {
    posts: [],
    postText: "",
    postsCount: 0,
    pageLimit: 4,
    pageCurrent: 1,
    isFetching: false
}

const addPostCreator = (state = statePosts, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, title: action.title, body: action.body}
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts, newPost]
            // stateCopy.posts.push(newPost);
            stateCopy.postText = ""
            return stateCopy;
        case SET_POSTS:
            return {...state, posts: action.posts}
        case SET_CURRENT_PAGE:
            return {...state, pageCurrent: action.pageCurrent}
        case SET_TOTAL_POSTS:
            return {...state, postsCount: action.postsCount}
        case TOGGLE_IS_FETCH:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
    
}

export const addPost = (title, body) => ({
    type: ADD_POST,
    title,
    body
})

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setTotalPosts = (postsCount) => ({type: SET_TOTAL_POSTS, postsCount})
export const setCurrentPage = (pageCurrent) => ({type: SET_CURRENT_PAGE, pageCurrent})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCH, isFetching})
 
export default addPostCreator;