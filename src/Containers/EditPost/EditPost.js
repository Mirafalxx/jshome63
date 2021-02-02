import React, { useState } from "react";
import axiosBlog from "../../axiosBlog";
import Edit from "../../Components/Edit/Edit";

const EditPost = (props) => {
  const parsePost = () => {
    const params = new URLSearchParams(props.location.search);
    return Object.fromEntries(params);
  };

  const [editPost, setEditPost] = useState(parsePost());

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setEditPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const editHandler = async (event) => {
    event.preventDefault();
    try {
      await axiosBlog.put(`/posts/${editPost.id}.json`, editPost);
    } finally {
      console.log("success update");
      props.history.push("/");
    }
  };
  const deleteHandler = async (event) => {
    event.preventDefault();

    try {
      await axiosBlog.delete(`/posts/${editPost.id}.json`).then((res) => {
        // console.log(res.data);
      });
    } finally {
      console.log("success delete");
      props.history.push("/");
    }
  };

  // console.log(editPost);
  return (
    <Edit
      title={editPost.title}
      description={editPost.description}
      handleChange={onChangeHandle}
      editPost={editHandler}
      deletePost={deleteHandler}
    />
  );
};

export default EditPost;
