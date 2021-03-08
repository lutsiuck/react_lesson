import axios from 'axios';
import React from 'react';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';

class Home extends React.Component{

    componentDidMount(){
        if (this.props.posts.posts.length === 0){
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => this.props.setPosts(response.data))
        }
    }

    render(){
        return (
            <main className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-9">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="row">
                            { this.props.posts.posts.map( (p) => <Post key={p.id} post={p} /> ) }
                        </div>
                        <button type="button" className="btn btn-outline-dark">Show more</button>
                    </div>
                    <Sidebar />
                </div>
            </main>
    )
    }
}

export default Home;