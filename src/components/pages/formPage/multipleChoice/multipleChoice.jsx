import React, {useState} from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import './multipleChoice.css';

export default function MultipleChoice(){
    const [questions, setQuestions] = useState(['Option 0','Option 1'])
    // index to keep track of which questions user is clicking
    const [index, setIndex] = useState(0)

    function changeQuestion(e){
        let newQuestions = [...questions]
        newQuestions[index] = e.target.value
        setQuestions(newQuestions)
    }

    function addQuestion(){
        let index = questions.length
        let newQuestions = [...questions]
        newQuestions.push("Option " + index)
        setQuestions(newQuestions)
    }

    function deleteQuestion(){
        let newQuestions = [...questions]
        newQuestions.splice(index,1)
        setQuestions(newQuestions)
    }
    return(
        <div>
            <h1>Hi</h1>
            <div className="column-flex-container">
            {
                
                questions.map(question => 
                    <label
                        // whenever user click to change the question, update the index as well
                        onClick = {() => {setIndex(questions.indexOf(question))}}
                    >
                        <input 
                            name = 'answerGroup' 
                            type ="radio" 
                            value={question}
                        />
                        <input
                            value = {question.charAt(0).toUpperCase() + question.slice(1)}
                            onChange = {changeQuestion}
                        />
                        <AiFillCloseCircle onClick= {deleteQuestion}/>
                    </label>   
                )
            }
            </div>
            <button onClick = {addQuestion} >Add option</button>
        </div>
    )
}