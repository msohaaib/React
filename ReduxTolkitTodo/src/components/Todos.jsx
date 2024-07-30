import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, addTodo, updateTodo } from '../Features/Todo/TodoSlice'

function Todos() {
    const todos = useSelector( state => state.todos)
    const dispatch = useDispatch()
    return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            >X</button>
        </li>
    ))}
    </>
  )
}

export default Todos
