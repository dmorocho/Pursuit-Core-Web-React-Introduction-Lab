import React from "react";
// import Profile_img from "../..";

class UserProfile extends React.Component {
  render() {
    return (
      <div
        id="userProfile"
        style={{
          border: "2px solid",
          borderRadius: "25px",
          width: "800px",
          margin: "10px"
        }}
      >
        <h3>Jordan Walker</h3>
        <p>React Developer</p>
        <p>lorem ipsum</p>
      </div>
    );
  }
}

export default UserProfile;
