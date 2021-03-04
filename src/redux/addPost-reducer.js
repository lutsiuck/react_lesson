const ADD_POST = 'ADD_POST';
let statePosts = {
    posts: [
        {id: 1, title: "Title 1", desc: "desc 1", date: "Nov 12", userId: 1},
        {id: 2, title: "Title 2", desc: "desc 2", date: "Nov 12", userId: 1},
        {id: 3, title: "Title 3", desc: "desc 3", date: "Nov 12", userId: 1},
        {id: 4, title: "Title 4", desc: "desc 4", date: "Nov 12", userId: 1},
        {id: 5, title: "Title 5", desc: "desc 5", date: "Nov 13", userId: 2},
        {id: 6, title: "Title 6", desc: "desc 6", date: "Nov 15", userId: 2}
    ],
    postText: ""
}

const addPostCreator = (state = statePosts, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, title: action.title, desc: action.desc}
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.postText = ""
            return stateCopy;
        default:
            return state;
    }
    
}

export const addPostActionCreator = (title, desc) => ({
    type: ADD_POST,
    title,
    desc
})

export default addPostCreator;