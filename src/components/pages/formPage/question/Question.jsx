import React, {useState} from 'react';
import MultipleChoice from '../multipleChoice/multipleChoice';
import './Question.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {AiFillDelete} from 'react-icons/ai'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Button } from 'react-bootstrap';

export default function Question(props){
    const [questionType, setQuestionType] = useState(props.question);

    function changeQuestionType(type){
        setQuestionType(type)
    }

    return(
        <div className = "row-flex-container">
            <div>
                <AiFillDelete/>
            </div>
            <div className="row-flex-container">
                <input type = "text"/>
                <DropdownButton id="dropdown-basic-button" title={questionType}>
                    <div className="column-flex-container">
                    <Dropdown.Item value = "checkbox" onClick = {() => {changeQuestionType('checkbox')}}>Checkboxes</Dropdown.Item>
                    <Dropdown.Item value = "radio" onClick = {() => {changeQuestionType('radio')}}>RadioGroup</Dropdown.Item>
                    <Dropdown.Item onClick = {() => {changeQuestionType('shortAnswer')}}>Short answer</Dropdown.Item>
                    
                    </div>
                </DropdownButton>
            </div>
            <div>
                {
                    (questionType==='checkbox' || questionType==='radio') && <MultipleChoice type={questionType}/>
                }
                {
                    (questionType === 'shortAnswer') && <input type="text" placeholder="Short answer"/>
                }
                {
                    (questionType === 'linearScale') && <h3>Implementing linear scale</h3>
                }
            </div>
        </div>
    )
}