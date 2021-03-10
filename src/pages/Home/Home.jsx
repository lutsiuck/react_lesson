import axios from 'axios';
import React from 'react';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import preloader from '../../assets/preloader.svg'

class Home extends React.Component{

    componentDidMount(){
        if (this.props.posts.length === 0){
            this.props.toggleIsFetching(true);
            axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.props.pageCurrent}&_limit=${this.props.pageLimit}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setPosts(response.data);
            })
        }

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => { this.props.setTotalPosts(response.data.length);})
    }

    onPageChanged = (e, pageNumber) => {
        e.preventDefault();
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${this.props.pageLimit}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setPosts(response.data)
            })
    }



    render(){

        let totalPages = Math.ceil(this.props.postsCount / this.props.pageLimit)

        let pages = []

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }

        return (
            <main className="container pt-5 pb-5">
                
                { this.props.isFetching ? <img src={preloader} alt=""/> : null }
                <div className="row">
                    <div className="col-md-9">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {/* <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li> */}
                                { pages.map( page => {
                                    let active = this.props.pageCurrent === page && "active"
                                    return <li key={page} className={ `page-item ${active}` }>
                                            <a className="page-link" onClick={ (e) => {this.onPageChanged(e, page)} } href="#"> { page } </a>
                                        </li>
                                }) }
                                {/* <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                        <div className="row">
                            { this.props.posts.map( (p) => <Post key={p.id} post={p} /> ) }
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