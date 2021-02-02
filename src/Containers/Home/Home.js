import React, { useEffect, useState } from "react";
import axiosBlog from "../../axiosBlog";
import DisplayPots from "../../Components/DisplayPots/DisplayPots";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchedPosts = async () => {
      const postResponse = await axiosBlog.get("/posts.json");
      const fetchedData = [];
      if (postResponse.data) {
        for (let key in postResponse.data) {
          fetchedData.unshift({
            ...postResponse.data[key],
            id: key,
          });
        }
        setPosts(fetchedData);
      }
    };
    fetchedPosts().catch(console.error);
  }, []);

  const editPostHandler = (postById) => {
    const params = new URLSearchParams(postById);
    props.history.push({
      pathname: "/edit",
      search: "?" + params.toString(),
    });
  };
  return (
    <div>
      {posts.map((elem, index) => {
        return (
          <DisplayPots
            key={elem.id}
            create={elem.createdAt}
            title={elem.title}
            description={elem.description}
            editPost={() => editPostHandler(elem)}
          />
        );
      })}
    </div>
  );
};

export default Home;
