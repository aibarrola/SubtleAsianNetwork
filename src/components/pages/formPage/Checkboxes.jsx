import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Checkboxes.css';

export default function Checkboxes(){
    const [question, setQuestion] = useState('');

    const updateQuestion = (e) => {
        setQuestion(e.target.value)
    }
    return(
        <div>
            <input type='text' />
            <DropdownButton className="dropdown-basic-button" title="Dropdown button">
                <div className="flex-column">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </div>
            </DropdownButton>

        </div>
    )
}