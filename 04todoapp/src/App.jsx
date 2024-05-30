import { useEffect, useState } from "react"
import InputTodo from "./Components/InputTodo"
import TodoItem from "./Components/TodoItem"
import { TodoProvider } from "./Context";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (
      prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo)
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (
      prev.filter((prevTodo) => prevTodo.id !== id)
    ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => (
      prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    ))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const todoItem = JSON.parse(localStorage.getItem('todos'));
    if (todoItem && todoItem.length > 0) {
      setTodos(todoItem);
    }
  }, [])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="w-full h-screen bg-bg-color text-white">
        <div className="w-full p-4">
          <h1 className="text-gray-white text-3xl font-bold text-center mb-5">Manage your Todos</h1>
          <div className="w-full">
            <InputTodo />
          </div>
          <hr className="my-5 w-4/5 mx-auto" />
          <div className="w-full mt-5">
            {todos?.map((todo) => (
              <div className="mb-1" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
