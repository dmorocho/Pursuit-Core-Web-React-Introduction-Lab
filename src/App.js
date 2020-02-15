import React from "react";
import Nav from "./components/nav";
import UserProfile from "./components/userProfile";
import Posts from "./components/posts";
import Contacts from "./components/contacts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: " column",
            alignItems: "flex-start",
            margin: "20px"
          }}
        >
          <UserProfile />

          <Posts />
        </div>

        <Contacts />
      </div>
    </div>
  );
}

export default App;
