import React from "react";
import "./networking.css";
import Card from "./card";

function cardContainer() {
  var fakeAccessMap = {
    user1: {
      firstName: "Tommy",
    },
    user2: {
      firstName: "Timmy",
    },
    user3: {
      firstName: "Jeff",
    },
  };

  {
    Object.values(fakeAccessMap).forEach((el) => {
      return <Card key={el.firstName} />;
    });
  }
}

export default cardContainer;
