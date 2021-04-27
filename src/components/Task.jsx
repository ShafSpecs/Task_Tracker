import React from 'react';
import { FaTimes } from 'react-icons/fa'

const Task =({ getTask, del, toggle }) => {
    return (
        <div className={`task ${ getTask.reminder ? 'reminder' : '' }`} onDoubleClick={() => toggle(getTask.id)}>
            <h3>
                {getTask.text} <FaTimes onClick={() => del(getTask.id)} style={{ color: 'red', cursor: 'pointer'}}/>
            </h3>
            <p>{getTask.time}</p>
        </div>
    )
}

//Line 8 is important (how to pass params from child to parent)
export default Task