import React, {useState} from 'react';

import Question from "./question/Question";
export default function FormPage(){
    const [questions, setQuestions] = useState(['checkbox','checkbox'])
    return(
        <div>
            {
                questions.map(question => 
                    <Question question = {question}/>
                )
            }
        </div>
    )
}