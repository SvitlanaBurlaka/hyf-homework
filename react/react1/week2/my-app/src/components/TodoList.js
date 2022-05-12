import { useState } from "react";
import todoData from "../data/TodoData";
import TodoItem from "./TodoItem";


export default function TodoList() {
    const [todoState, setTodoState] = useState(todoData);
    const [inputTodo, setInputTodo] = useState("");
    const AddNewTodo = () => {
        setTodoState((prevTodos) => {
            const newTodo = {
                id: prevTodos[prevTodos.length - 1].id + 1,
                description: inputTodo,
                status: false,
            };
            return [...prevTodos, newTodo];
        });
    };

    const onTodoChecked = (id) => {
        const updatedCheckState = [...todoState];
        updatedCheckState.map((item) => {
            if (id === item.id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodoState(updatedCheckState);
    };

    const deleteOnClick = (id) => {
        const newTodos = todoState.filter((todo) => todo.id !== id);
        setTodoState(newTodos);
    };

    const taskInputHandler = (e) => {
        setInputTodo(e.target.value)
    }



    return (<>
        <input type="text" value={inputTodo} onChange={taskInputHandler} />
        <button onClick={AddNewTodo} > Add new Todo </button>
        <ul> {
            todoState.length ? (
                todoState.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            id={todo.id}
                            description={todo.description}
                            status={todo.status}
                            onTodoChecked={onTodoChecked}
                            deleteOnClick={deleteOnClick}
                        />
                    );
                })
            ) : (<p> No items </p>
            )
        } </ul>
    </>
    );
}