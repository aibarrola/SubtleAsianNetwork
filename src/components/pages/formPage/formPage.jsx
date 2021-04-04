import React from 'react';
import Checkboxes from './Checkboxes';
import MultipleChoice from './multipleChoice/multipleChoice';
export default function formPage(){
    return(
        <div>
            <Checkboxes />
            <MultipleChoice />
        </div>
    )
}