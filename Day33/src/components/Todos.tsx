import React, {useState} from 'react';
import TodoList from "./TodoList";

interface ITodoType {
    title: string,
    done: boolean,
    index: number
}

function Todos() {
    const [todos, setTodos] = useState<ITodoType[]>([])
    const [input, setInput] = useState<string>('')

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => (
            todo !== todos[id]
        ))
        setTodos(newTodos)
    }

    return (
        <div>
            <div>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>

                <button
                    onClick={() => {
                        setTodos([{title: input, done: false, index: todos.length}, ...todos])
                        setInput('')
                    }}
                >
                    Add
                </button>
                </form>
            </div>
            {
                todos.map((todo, index) => {
                        todo.index = index
                        return <TodoList key={index} title={todo.title} done={todo.done} index={todo.index}
                                         handleDelete={handleDelete}/>
                    }
                )
            }
        </div>

    );
}

export default Todos;