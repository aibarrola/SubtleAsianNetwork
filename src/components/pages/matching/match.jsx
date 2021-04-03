import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import lodash from "lodash";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import "./match.css";
import {v4} from "uuid";

const item1 = {
    id: v4(),
    name: "Vinh Nguyen"
}
const item2 = {
    id: v4(),
    name: "Bob Ross"
}
const item3 = {
    id: v4(),
    name: "Racoon Man"
}
// console.log(item1);

function Match(){
    const [state, setState] = useState({
        "1": {
            title: "Team 1",
            items: [item1]
        },
        "2": {
            title: "Team 2",
            items: [item2]
        },
        "3": {
            title: "Team 3",
            items: [item3]
        }
    })
    return(
    <div className ="Match"> 
        <DragDropContext onDragEnd = {e => console.log(e)}>
            {lodash.map(state, (data,key) =>{
                return (
                    <div key = {key} className={"row"}>
                        <h3>{data.title}</h3>
                        <Droppable droppableId={key}>
                            {(provided) => { //pass required child function
                                return (
                                    <div ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={"droppable-row"}
                                    >
                                        {data.items.map((element,index) => {
                                            return (
                                                <Draggable key = {element.id} index={index} draggableId = {element.id}>
                                                    {(provided) => {
                                                        return (
                                                            <div 
                                                            className ={"item"}
                                                            ref = {provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            >
                                                            
                                                            {element.name}

                                                            </div>
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )
                            }}
                        </Droppable>
                    </div>

                )
            })}
        </DragDropContext>
    </div>);
}
export default Match;