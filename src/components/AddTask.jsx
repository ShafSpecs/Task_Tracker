import React, { useState } from 'react'

const AddTask = ({ add }) => {
    const [text, setText] = useState('')
    const [time, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a task!')
        }

        add({ text, time, reminder })

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Set day & Time</label>
                <input type='text' placeholder='Day & Time' value={time} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask