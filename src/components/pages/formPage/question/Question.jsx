import React, {useState} from 'react';
import MultipleChoice from '../multipleChoice/multipleChoice';
import './Question.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Question(){
    const [questionType, setQuestionType] = useState('checkbox');
    const [questionTypes, setQuestionTypes] = useState(['Linear Scale', 'Short Answer', 'Checkboxes', 'Multiple Choice'])

    function changeQuestionType(type){
        setQuestionType(type)
    }
    return(
        <div>
            <div className="row-flex-container">
                <input type = "text"/>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <div className="column-flex-container">
                    <Dropdown.Item value = "checkbox" onClick = {() => {changeQuestionType('checkbox')}}>Checkboxes</Dropdown.Item>
                    <Dropdown.Item value = "radio" onClick = {() => {changeQuestionType('radio')}}>RadioGroup</Dropdown.Item>
                    <Dropdown.Item onClick = {() => {changeQuestionType('shortAnswer')}}>Short answer</Dropdown.Item>
                    <Dropdown.Item onClick = {() => {changeQuestionType('linearScale')}}>Linear Scale</Dropdown.Item>
                    </div>
                </DropdownButton>
            </div>
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
    )
}