import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className="col-md-6 mb-2">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className={`col p-4 d-flex flex-column position-static ${styles.post_info}`}>
                    <strong className="d-inline-block mb-2 text-primary">{props.post.userId}</strong>
                    <h3 className="mb-0">{props.post.title}</h3>
                    <div className="mb-1 text-muted">{props.post.date}</div>
                    <p className="card-text mb-auto">{props.post.body}</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                </div>
            </div>
        </div>
    )
}

export default Post;