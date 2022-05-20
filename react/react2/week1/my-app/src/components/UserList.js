import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { UserItem } from "./UserItem";
import { UsersProvider } from "./UsersContext";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        searchUser(input)
    }, [input])

    function searchUser(query) {
        if (query !== "") {
            setIsLoading(true);
            setError(false);
            fetch(`https://api.github.com/search/users?q=${query}`)
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Something went wrong!")
                    }
                    return response.json()
                })
                .then((result) => {
                    setUsers(result.items);
                    console.log(result);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(true);
                    setIsLoading(false);
                    setUsers("");
                })
        }
    }
    const handleInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const contextValue = {
        handleInput: handleInput,
        error: error,
        isLoading: isLoading
    }
    return (
        <UsersProvider value={contextValue}>
            <Header />
            <ul>
                {users.length ? (
                    users.map((user) => {
                        return <UserItem
                            userLogin={user.login}
                            key={user.id} />;
                    })
                ) : (
                    <p>No items</p>
                )}
            </ul>
        </UsersProvider>
    );
};
