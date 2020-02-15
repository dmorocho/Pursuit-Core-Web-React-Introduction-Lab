import React from "react";
import Post from "./post";
// import "../css/person.css";

class Posts extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid",
          borderRadius: "25px",
          width: "800px",
          margin: "20px"
        }}
      >
        <h3>Posts</h3>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Posts;
