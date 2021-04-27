import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [showAddTask, toggleShow] = useState(false)
    const [tasks, setTask] = useState([
        /* {
            id: 1,
            text: 'Eat Breakfast',
            time: '8:30 am',
            reminder: true,
        },
        {
            id: 2,
            text: 'Eat Lunch',
            time: '2:30 pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Eat Dinner',
            time: '7:30 pm',
            reminder: false,
        } */
    ])

    //Add Task
    const Add = (task) => {
        const id = Math.floor(Math.random() * 999999) + 1;

        const newTask = { id, ...task }
        setTask([...tasks, newTask])
    }

    //Toggle Task
    const toggleAdd = () => {
        toggleShow(!showAddTask)
    }

    //Delete Task
    const deleteTask = (id) => {
        setTask(tasks.filter((tasks) => tasks.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    }

    return (
        <div className='container'>
            <Header form={toggleAdd} showAdd={showAddTask}/>
            {showAddTask && <AddTask add={Add}/>}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} del={deleteTask} toggle={toggleReminder}/>
            ) : (
                'No Task planned yet!'
            )}
        </div>
    )
}

export default App