import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import './createCohort.css';
import './accordion.css'
// Helpers
import { getJwt } from "../../Helpers/jwt";

function CreateCohort() {

  const [cohortName, setCohortName] = useState('');
  const [cohortSchool, setCohortSchool] = useState('');
  const [cohortOrg, setCohortOrg] = useState('');
  const [token, setToken] = useState();

  // Get user id from the parameters
  let {id} = useParams();

  useEffect(() => {
    setToken(getJwt());
  }, [])

  function handleChange(e) {
    const {name, value} = e.target;

    switch (name) {
      case "cohortName":
        setCohortName(value);
        break;
      case "cohortSchool":
        setCohortSchool(value);
        break;
      case "cohortOrg":
        setCohortOrg(value);
        break;
      default:
        // No default
    }
  }

  function handleSubmit(e) {
    e.preventDefault(e);

    let config = {
      'x-auth-token': getJwt()
    }

    const newCohort = {
      cohortName,
      cohortSchool,
      cohortOrg,
      adminUser: id
    }

    Axios.post(`https://san-api.herokuapp.com/cohorts`, newCohort, config)
      .then (res => {
        console.log(res);
        window.location.assign(`/user/profile/${id}`);
      })
      .catch(err => {
        console.log(err);
      })
  }


  function hideBoxes(id) {
    if (document.getElementById(id).checked) {
      var i;
      for (i = 0; i<5; i++){
        if (i != id) {
          document.getElementById(i).checked=false;
        }
    }
  }
  }
  
  function closeBox() {
    document.getElementById(id).style.display = "none";
  }

  return (
    <div>
    <div className="createCohort">
      <div className="createCohort-container">
        <div className="createCohort-title-container">
          <h1 className="createCohort-title">Create New Cohort</h1>
        </div>

        {/* Create Cohort Form Container */}
        <form className="createCohort-form" onSubmit={handleSubmit}>

          {/* Cohort Name Field */}
          <div className="createCohort-form-field">
            <label className="createCohort-field-label">Name your Cohort <span className="createCohort-field-required">*</span></label>
            <input type="text" name="cohortName" value={cohortName} onChange={handleChange} placeholder="E.g. Engineers, Teachers" className="createCohort-field-input" required/>
          </div>

          {/* Cohort School / Company Field */}
          <div className="createCohort-form-field">
            <label className="createCohort-field-label">School / Company</label>
            <input type="text" name="cohortSchool" value={cohortSchool} onChange={handleChange} placeholder="E.g. San Jose State University" className="createCohort-field-input" required/>
          </div>

          {/* Cohort Organization Field*/}
          <div className="createCohort-form-field">
            <label className="createCohort-field-label">Organization</label>
            <input type="text" name="cohortOrg" value={cohortOrg} onChange={handleChange} placeholder="E.g. SASE, VSA" className="createCohort-field-input" required/>
          </div>

          {/* Cohort Submit Button */}
          <div className="createCohort-form-submit-btn-container">
            <input type="submit" className="createCohort-form-submit-btn" value="Create Team"/>
          </div>
        </form>
      </div>
    </div>
    
      {/* Accordion */}
    <section class="container" id="container">
  <div class="ac">
    
    <input class="ac-input" id="top" name="top" type="checkbox" />
    <label class="ac-label" for="top">Getting Started Guide</label>
    
    <article class="ac-text">
      
      <div class="ac-sub">
        <input class="ac-input" id="0" name="0" type="checkbox" onclick={() => hideBoxes()}/>
        <label class="ac-label" for="0">Create new group</label>
        <article class="ac-sub-text">
  <p>Start by clicking <i>Create</i> on the top right. Name your group and you also can put your company/school and organization name
  </p>
        </article>
      </div>
      
      <div class="ac-sub">
        <input class="ac-input" id="1" name="1" type="checkbox" onclick={() => hideBoxes()}/>
        <label class="ac-label" for="1">Create a form</label>
        <article class="ac-sub-text">
          <p>Add any questions you'd like. Ranging from multiple choice to short answer. Customize the options for each question.</p>
        </article>
      </div>
  
      <div class="ac-sub">
      <input class="ac-input" id="2" name="2" type="checkbox" onclick={() => hideBoxes()}/>
        <label class="ac-label" for="2">Invite members</label>
        <article class="ac-sub-text">
      <p>sadfasdfads</p>
  </article>
    </div>
  
    <div class="ac-sub">
      <input class="ac-input" id="3" name="3" type="checkbox" onclick={() => hideBoxes()}/>
        <label class="ac-label" for="3">Arrange groups</label>
        <article class="ac-sub-text">
      <p>sadfasdfads</p>
  </article>
    </div>
  
    <div class="ac-sub">
      <input class="ac-input" id="4" name="4" type="checkbox" onclick={() => hideBoxes()}/>
        <label class="ac-label" for="4">Notify members</label>
        <article class="ac-sub-text">
      <p>sadfasdfads</p>
  </article>
    </div>
    <div class="ac">
      <input class="ac-input" id="close" name="close" type="checkbox" onclick={closeBox}/>
        <label class="ac-label" for="close">Got it. Don't show again.</label>
    </div>
    </article>
    
  </div> 
  </section>
    </div>
  )
}

export default CreateCohort;