import React from 'react';
import TodoApp from './TodoApp';
import './app.css';

const App = () => {
    return (
        <div className='App'>
            <div className='title'>
                <h1>Todo App</h1>
            </div>
            <div className='body'>
                <TodoApp />
            </div>
        </div>
    )
}
export default App;