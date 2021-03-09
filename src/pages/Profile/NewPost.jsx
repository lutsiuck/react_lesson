import React from "react";

let NewPost = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="mb-3">
        <label className="form-label d-block">
          Image:
          <input className="form-control" type="file"></input>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label d-block">
          Title:
          <input
            type="text"
            className="form-control"
            placeholder="Title"
          ></input>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label d-block">
          Date:
          <input
            type="text"
            className="form-control"
            placeholder="Date"
          ></input>
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label d-block">
          Description:
          <textarea className="form-control" rows="3"></textarea>
        </label>
      </div>
      <button className="btn btn-outline-success">Add post</button>
    </div>
  );
};

export default NewPost;
