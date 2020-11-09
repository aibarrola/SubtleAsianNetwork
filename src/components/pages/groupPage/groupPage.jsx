import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios"
import "./groupPage.css";
import GroupToDo from "../groupPage/groupToDo";
import Announcments from "../groupPage/announcements";
import Navbar from "../../navbar";
import GroupHeader from "./groupHeader";
import QnA from "./qna";
import Sidebar from "./sideBar/SideBar.jsx";



function Grouppage() {
  let {id} = useParams();
  
  const [groupName, setGroupName] = useState("");
  const [github, setGithub] = useState("");
  const [projectPercent, setPercent] = useState(0);
  const [description, setDescription] = useState("");

//make this into one UseState when not half asleep
const [groupSetting, settingChange] = useState({
  groupName: null,
  gitHub: null,
  projectPercent: null,
  description: null,
});

  useEffect(()=>{
    Axios.get(`https://san-api.herokuapp.com/groups/${id}/`)
    .then((res)=>{
      settingChange({
        groupName: res.data.groupName,
        gitHub: res.data.link,
        projectPercent: res.data.percent,
        description: res.data.description
      });
      setGroupName(res.data.groupName);
      setGithub(res.data.link);
      setPercent(res.data.percent);
      setDescription(res.data.description);
    })
    .catch(err =>{
      console.log(err);
    }) 
  },[])


  function handleSubmit(e) {
    e.preventDefault();
      const updatedGroup ={
        groupName: groupName,
        link: github,
        percent: projectPercent,
        description: description,
      }
      Axios.post(`https://san-api.herokuapp.com/groups/${id}/update`, updatedGroup)
      .catch(err =>{
        console.log(err);
      })
     settingChange({
      groupName: groupName,
      gitHub: github,
      projectPercent: projectPercent,
      description: description,
    });
    showPopUp();
  }

  const [editPopUp, togglePopUp] = useState(false);
  const showPopUp = () => togglePopUp(!editPopUp);

  return (
    <section className="groupPageContainer">
      {editPopUp && (
        <div className="editPopUp">
          <div className="editPopUpContainer">
            <span className="closePopUp" onClick={showPopUp}>
              {" "}
              X{" "}
            </span>
            <h2> Edit Group </h2>
            {/*  <form
              onSubmit={(e) => handleSubmit(e)}
              className="editPopUpContainer"
            > */}
            <div className="popUpInput">
              <span className="popUpLabels"> Group Name </span>
              <input
                type="text"
                name="name"
                value= {groupName}
                className="popInput"
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div className="popUpInput">
              <span className="popUpLabels"> Github Link </span>
              <input
                type="text"
                name="name"
                value={github}
                className="popInput"
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <div className="popUpInput">
              <span className="popUpLabels"> Project Progress </span>
              <input
                type="number"
                name="name"
                className="popPercent"
                value={projectPercent}
                min="0"
                max="100"
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>
            <div className="popUpInput">
              <span className="popUpLabels"> Description </span>
              <input
                type="text"
                name="name"
                value= {description}
                onChange={(e) => setDescription(e.target.value)}
                className="popDesciption"
              />
            </div>

            <button className-="popUpButton" onClick={(e) => handleSubmit(e)}>
              Confirm
            </button>
            {/*  </form> */}
          </div>
        </div>
      )}
      <Navbar />
      <Sidebar />
      <GroupHeader groupSetting={groupSetting} showPopUp={showPopUp} />

      <div className="listContainer">
        <Announcments />
        <GroupToDo />
        <QnA />
      </div>
    </section>
  );
}

export default Grouppage;
