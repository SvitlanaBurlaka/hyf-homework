import { useContext } from "react";
import { UserContext } from "./DataContext";

export function UserSearch() {

    const value = useContext(UserContext);

    return (
        <>
            <h1>Github user searcher </h1>
            <input type="text" onChange={value.handleInput} />
            {value.error && <p>Something went wrong</p>}
            {value.isLoading ? (<p>Loading...</p>) : ""}
        </>
    );
}