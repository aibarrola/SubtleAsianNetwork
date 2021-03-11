import React, { useState } from 'react';
import './createCohort.css';

function CreateCohort() {

  const [cohortName, setCohortName] = useState('');
  const [cohortSchool, setCohortSchool] = useState('');
  const [cohortOrg, setCohortOrg] = useState('');

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

  return (
    <div className="createCohort">
      <div className="createCohort-container">
        <div className="createCohort-title-container">
          <h1 className="createCohort-title">Create New Cohort</h1>
        </div>

        {/* Create Cohort Form Container */}
        <form className="createCohort-form">

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