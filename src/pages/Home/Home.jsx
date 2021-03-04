import React from 'react';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = (props) => {

    let posts = props.posts.posts.map( (p) => <Post post={p} /> )

    return (
        <main className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        { posts }
                    </div>
                </div>
                <Sidebar />
            </div>
        </main>
    )
}

export default Home;