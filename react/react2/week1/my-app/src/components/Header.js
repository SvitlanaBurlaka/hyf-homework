
import { useContext } from "react";
import { userContext } from "./UsersContext";

export const Header = () => {
    const value = useContext(userContext);
    return (
        <>
            <h1>Github user searcher </h1>
            <input type="text" onChange={value.handleInput} />
            {value.error && <p>Something went wrong</p>}
            {value.isLoading ? (<p>Loading...</p>) : ""}
        </>
    )
}