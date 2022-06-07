import React from "react";
import { useState, useEffect } from "react";

export const UserContext = React.createContext();

export const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchUser(input)
    }, [input])

    function fetchUser(query) {
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
        setInput(e.target.value)
    }

    return (
        <UserContext.Provider value={{ fetchUser, handleInput, users, isLoading, error }}>
            {children}
        </UserContext.Provider>
    )

};