import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import './createCohort.css';

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

  return (
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
  )
}

export default CreateCohort;