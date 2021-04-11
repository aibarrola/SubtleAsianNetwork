import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

import Question from "./question/Question";
export default function FormPage(){
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        let newQuestions = [...questions]
        newQuestions.push(uuidv4())
        newQuestions.push(uuidv4())
        setQuestions(newQuestions)
    }, [])

    function deleteQuestion(index){
        let newQuestions = [...questions]
        newQuestions.splice(index)
        setQuestions(newQuestions)
    }

    function addQuestion(){
        let newQuestions = [...questions]
        newQuestions.push(uuidv4())
        setQuestions(newQuestions)
    }
    return(
        <div>
            {
                questions.map(id => 
                    <Question index = {questions.indexOf(id)} onDelete={deleteQuestion}/>
                )
            }
            <Button onClick={addQuestion}>Add questions</Button>
        </div>
    )
}