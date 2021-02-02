import React, { useState } from "react";
import AddPost from "../../Components/AddPost/AddPost";
import axiosBlog from "../../axiosBlog";

const Add = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setPost((pervState) => ({
      ...pervState,
      [name]: value,
    }));
  };
  const addPost = async (e) => {
    const postRequest = {
      createdAt: new Date().toISOString().slice(0, 10),
      ...post,
    };
    e.preventDefault();
    try {
      await axiosBlog.post("/posts.json", postRequest);
    } finally {
    }

    setPost({ title: "", description: "" });
  };

  return (
    <div>
      <AddPost
        add={addPost}
        handleChange={changeHandler}
        title={post.title}
        description={post.description}
      />
    </div>
  );
};

export default Add;
