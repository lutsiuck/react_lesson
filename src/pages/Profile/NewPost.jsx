import React  from 'react';
import Post from '../../components/Post/Post';

let NewPost = (props) => {

    let state = props.posts

    let newTitle = React.createRef();
    let newDesc = React.createRef();

    let onAddPost = () => {

        let title = newTitle.current.value;
        let desc = newDesc.current.value;

        props.addPost(title, desc)

        newTitle.current.value = "";
        newDesc.current.value = "";
    }


    let posts = props.posts.posts.map( (p) => <Post key={p.id} post={p} /> )

    return (
        <div>
            <div className="container pt-5 pb-5">
                {/* <div className="mb-3">
                    <label className="form-label d-block">Image:
                        <input className="form-control" type="file"></input>
                    </label>
                </div> */}
                <div className="mb-3">
                    <label className="form-label d-block">Title:
                        <input type="text" className="form-control" placeholder="Title" ref={newTitle}></input>
                    </label>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label d-block">Date:
                        <input type="text" className="form-control" placeholder="Date"></input>
                    </label>
                </div> */}
                <div className="mb-3">
                    <label className="form-label d-block">Description:
                        <textarea className="form-control" rows="3" ref={newDesc}></textarea>
                    </label>
                </div>
                <button className="btn btn-outline-success" onClick={onAddPost}>Add post</button>
            </div>
            <div className="row">
                {posts}
            </div>
        </div>
    )
}

export default NewPost;
