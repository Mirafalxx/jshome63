import React from "react";

const Edit = (props) => {
  return (
    <div>
      <form onSubmit={props.add} className="AddPost">
        <h1 className="formTitle">Edit Post</h1>
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
        <input
          type="submit"
          value="Edit"
          className="btn"
          onClick={props.editPost}
        />
        <input
          type="submit"
          value="&times;"
          className="btn"
          onClick={props.deletePost}
        />
      </form>
    </div>
  );
};

export default Edit;
