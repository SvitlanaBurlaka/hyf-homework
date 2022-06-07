import { useContext } from "react";
import { UserContext } from "./DataContext";

export function RenderUser() {

    const value = useContext(UserContext);
    return (
        <>
            <ul>
                {value.users.length ? (
                    value.users.map((user) => {
                        return <li key={user.id} >
                            {user.login}
                        </li>;
                    })
                ) : (
                    <p>No items</p>
                )}
            </ul>
        </>
    );
}
