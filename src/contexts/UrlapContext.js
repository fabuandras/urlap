import { createContext } from "react";
import { useState } from "react";

export const UrlapContext = createContext("")

export const UrlapProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    /* betesszük egy listába az űrlap adatait */
    function listaba(adat) {
        console.log(adat)
        const ujTodo = {
            id: Date.now(),
            text: adat.todo,
            date: adat.date,
            done: false
        };
        setTodos((elozo) => [...elozo, ujTodo]);
    }

    function torolTodo(id) {
        setTodos((elozo) => elozo.filter((todo) => todo.id !== id));
    }

    function keszreAllit(id) {
        setTodos((elozo) =>
            elozo.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    return <UrlapContext.Provider value={{ todos, listaba, torolTodo, keszreAllit }}>
        {children}
    </UrlapContext.Provider>
}