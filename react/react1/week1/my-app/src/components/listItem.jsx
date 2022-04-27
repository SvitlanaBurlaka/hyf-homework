

export default function ListItem(props) {
    return ( <li className="my-List">
            Task: {props.description}, Deadline: {props.deadlineDate}
            </li>
    )
}