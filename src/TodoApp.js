import React, { useState } from "react";
import './todoApp.css';


const TodoApp = () => {

const [task, setTask] = useState('')
const [taskList, setTaskList] = useState([])


const handleChange = (e) => {
    setTask(e.target.value);
}

const AddTask = () => {
    if(task !== ''){
        const taskDetails = {
            id: Math.floor(Math.random()*1000),
            value: task,
            isCompleted: false,
        };
        setTaskList([...taskList, taskDetails])
    }
};

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id != id));
    };

    const taskCompleted =(e, id) => {
        e.preventDefault();
        const element = taskList.findIndex((elem) => elem.id == id);
        const newTaskList = [...taskList];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true,
        };

        setTaskList(newTaskList)
    }

    return (
        <div className="todo">
            <input
                type='text'
                placeholder='Add task here ...'
                onChange={(e) => handleChange(e)}
             />
            <button className="add-btn" onClick={AddTask}>Add</button>
            <br/>
            {taskList !== [] ?
                <ul>
                    {taskList.map((t) => (
                        <li className={t.isCompleted ? 'crossText' : 'listitem'}>{t.value}
                        <button className="delete" onClick={(e) =>deleteTask(e, t.id)}>Delete</button>
                        <button className="completed" onClick={(e) =>taskCompleted(e, t.id)}>completed</button>
                        </li>
                    ))}
                </ul>
            : null }
        </div>
     );
}
export default TodoApp;