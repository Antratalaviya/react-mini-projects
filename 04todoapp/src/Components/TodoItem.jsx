import React, { useState } from 'react';
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.text);
    const [isEditable, setIsEditable] = useState(false);
    const { toggleComplete, updateTodo, deleteTodo } = useTodo();

    const handleToggleComplete = () => {
        toggleComplete(todo.id);
    }

    const handleUpdate = () => {
        updateTodo(todo.id, { ...todo, text: todoMsg })
        setIsEditable(false);
    }

    return (
        <div className='overflow-hidden shadow-sm flex justify-center'>
            <div className={`w-7/12 min-w-md flex items-center border-l-2 border-y-2 border-gray-white text-gray-white rounded-l-md pl-1  ${isEditable ? 'bg-light-green' : 'bg-purple'}`}>
                <div className='h-4/5 p-1 rounded-md bg-light-brown flex items-center justify-center'>
                    <input
                        type="checkbox"
                        className='w-5'
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Enter your todos..."
                    className={`w-full outline-none py-2 px-3 rounded-l-md text-black ${isEditable ? 'bg-light-green' : 'bg-purple'} ${todo.completed ? "line-through" : ''}`}
                    value={todoMsg}
                    readOnly={!isEditable}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
            </div>
            <div className={`flex items-center gap-x-2 rounded-r-md pr-1 border-r-2 border-y-2 border-gray-white text-gray-white  ${isEditable ? 'bg-light-green' : 'bg-purple'}`}>
                <div className='w-3/5 h-4/5 p-1 rounded-md bg-light-brown flex items-center justify-center'>
                    <button
                        onClick={(e) => {
                            if (todo.completed) return;

                            if (isEditable) {
                                handleUpdate(e)
                            } else {
                                setIsEditable((prev) => !prev)
                            }
                        }}
                        disabled={todo.completed}
                        className={`${todo.completed ? 'opacity-50' : ''}`}
                    >
                        {isEditable ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-3 fill-dark-green">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-3 fill-dark-green">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className='w-3/5 h-4/5 p-1 rounded-md bg-light-brown flex items-center justify-center'>
                    <button onClick={() => deleteTodo(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-red-600 stroke-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default TodoItem
