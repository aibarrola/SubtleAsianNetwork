import React from "react";
import "./networking.css";
import Navbar from "../../navbar";
import Card from "../Networking/card";
import Search from "./search";
import Axios from "axios";
import { useState } from "react";

const Networking = (props) => {
  const [users, setUsers] = useState([]);

  Axios.get("http://localhost:5000/users/")
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  /**var fakeAccessMap = {
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

**/
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

        {users.map((currentUser) => {
          return <Card users={currentUser} key={currentUser._id} />;
        })}
      </div>
    </div>
  );
};

export default Networking;
