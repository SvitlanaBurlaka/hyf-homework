export default function TodoItem(props) {
    const { description, status, id, deleteOnClick, onTodoChecked } = props;
    return (
        <li>
            <span className={status ? "checked-item" : "item"}>{description}</span>
            <input type="checkbox" checked={status} onChange={() => onTodoChecked(id)} />
            <button onClick={() => deleteOnClick(id)}>Delete</button>
        </li>
    )
};