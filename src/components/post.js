import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid",
          borderRadius: "25px",
          width: "600px",
          margin: "10px"
        }}
      >
        <h3>Title</h3>
        <p>lorem ipsum</p>
      </div>
    );
  }
}

export default Post;
