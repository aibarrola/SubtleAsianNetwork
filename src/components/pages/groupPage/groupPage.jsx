import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./groupPage.css";
import GroupToDo from "../groupPage/groupToDo";
import Announcments from "../groupPage/announcements";
import Navbar from "../../navbar";
import GroupHeader from "./groupHeader";
import QnA from "./qna";

import Axios from "axios";


function GroupPage() {

  const [group, setGroup] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    //check what group the person is in
    //get the group that they are in 
    //send a request for that group
    Axios.get(`https://san-api.herokuapp.com/groups/${id}`).then((response) => {
      setGroup(response.data);
    });
  }, []);



  return (
    <section className="groupPageContainer">
      <Navbar />
      <GroupHeader />

      <div className="listContainer">
        <Announcments />
        <GroupToDo />
        <QnA />
      </div>
    </section>
  );
};

export default GroupPage;
