import React, { useState } from 'react'
import { useTodo } from '../Context/index'

function InputTodo() {
    const [todoMsg, setTodoMsg] = useState('');
    const { addTodo } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ id: Date.now(), text: todoMsg, completed: false })
        setTodoMsg('')
    }

    return (
        <div className='overflow-hidden shadow-sm flex justify-center'>
            <div className='w-3/5 min-w-md'>
                <input
                    type="text"
                    placeholder="Enter your todos..."
                    className="w-full outline-none py-2 px-3 bg-dark-green border-l-2 border-y-2 border-gray-white text-gray-white rounded-l-md"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="text-black font-semibold bg-gray-white py-2 px-4 rounded-r-md"
            >
                add
            </button>
        </div>
    )
}

export default InputTodo
