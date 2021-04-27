import React from 'react';
import Task from './Task'

const Tasks = ({ tasks, del, toggle }) => {
    return(
        <>
            {tasks.map((getTask) => (
                <Task key={getTask.id} getTask={getTask} del={del} toggle={toggle}/>
            ))}
        </>
    )
}

export default Tasks