import todoList from "../data/todoList";
import ListItem from "./ListItem";


export default function UnorderedList() {
    return (
        <article>
            <ul> {
                todoList.map((item) => {
                    return (< ListItem
                        key={item.id}
                        description={item.description}
                        deadlineDate={item.deadlineDate}
                    />
                    )
                })}
            </ul>
        </article>
    )
}