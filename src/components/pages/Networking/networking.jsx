import React from "react";
import "./networking.css";
import Navbar from "../../navbar";
import Card from "../Networking/card";
import Search from "./search";

const networking = (props) => {
  var fakeAccessMap = {
    user1: {
      key: "sijaosjoajs",
      firstName: "James Nguyen",
      job: "Homeless Man",
      bio: "Can I get some money?",
    },
    user2: {
      key: "osijwoijdoj",
      firstName: "Timmy Kien Nguyen Jr",
      job: "Twitch Streamer",
      bio: "Let me see yall twitch prime",
    },
    user3: {
      key: "asaskk",
      firstName: "Angelo",
      job: "Storm Chaser!!!",
      bio: "Breaking news.... this just in",
    },
    user4: {
      key: "asojoaisj",
      firstName: "Jeff",
      job: "Rockstar",
      bio: "Gagagasas",
    },
    user5: {
      key: "asojoaisj",
      firstName: "Mike",
      job: "idk",
      bio: "hi",
    },
    user6: {
      key: "asojoaisj",
      firstName: "horse",
      job: "Storm Chaser!!!",
      bio: "Breaking news....",
    },
  };


  return (
    <div>
      <Navbar />
      <Search />

      <div className="cardContainer">
        {/*  <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}

        {Object.values(fakeAccessMap).map((el) => (
          <Card
            key={el.key}
            users={el}
            /* firstName={el.firstName}
            job={el.job}
            bio={el.bio} */
          />
        ))}
      </div>
    </div>
  );
};

export default networking;
