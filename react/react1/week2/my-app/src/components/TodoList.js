import { useState } from "react";
import todoData from "../data/TodoData";


export default function TodoList() {
    const [todoState, setTodoState] = useState(todoData);

    const AddNewTodo = () => {
        setTodoState((prevTodos) => {
            const newTodo = {
                id: prevTodos[prevTodos.length - 1].id + 1,
                description: "Random text",
                status: false,
            };
            return [...prevTodos, newTodo];
        });
    };

    function TaskDescription(props) {
        return (
            <span>
                {props.description}
            </span>
        )
    };

    const handleOnChange = (id) => {
        const updatedCheckState = [...todoState]
        updatedCheckState.map((item) => {
            if (id === item.id) {
                item.status = !item.status;
            }
            return item;
        })
        setTodoState(updatedCheckState)
    }

    const deleteOnClick = (id) => {
        const newTodos = todoState.filter((todo) => todo.id !== id)
        setTodoState(newTodos)
    }
    return (
        <>
            <button onClick={AddNewTodo}> Add new Todo </button>
            <ul> {todoState.length ? (
                todoState.map((todo) => {
                    return (
                        <li className={todo.status ? "checked-item" : "item"}
                            key={todo.id}>
                            <TaskDescription
                                description={todo.description}
                            />
                            <input
                                type="checkbox"
                                checked={todo.status}
                                onChange={() => handleOnChange(todo.id)}
                            />
                            <button onClick={() => deleteOnClick(todo.id)} >
                                Delete
                            </button>
                        </li>)
                })
            ) : (<p> No items</p>)
            }
            </ul>
        </>
    );
};