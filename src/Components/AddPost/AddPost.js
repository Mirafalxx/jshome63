import React from "react";
import "./AddPost.css";
const AddPost = (props) => {
  return (
    <div>
      <form onSubmit={props.add} className="AddPost">
        <h1 className="formTitle">Add New Post</h1>
        <input
          placeholder="Title"
          type="text"
          className="Input"
          onChange={props.handleChange}
          value={props.title}
          name="title"
        />
        <textarea
          placeholder="Description"
          rows="7"
          cols="35"
          className="textArea"
          onChange={props.handleChange}
          value={props.description}
          name="description"
        />
        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
};

export default AddPost;
