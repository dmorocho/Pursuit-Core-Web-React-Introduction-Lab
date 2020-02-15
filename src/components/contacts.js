import React from "react";
import ContactCard from "../components/ContactUserCard";

class Contacts extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid",
          borderRadius: "25px",
          width: "600px"
        }}
      >
        <h3>Contacts</h3>
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    );
  }
}

export default Contacts;
