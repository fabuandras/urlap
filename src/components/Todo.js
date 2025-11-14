/* Jelenítsd meg a teendőket!
A teendőket lehessen törölni
elvégzettre állítani
ha lejárt a határidő, akkor változzon a háttérszíne pirosra.
*/

import React, { useContext } from "react";
import { UrlapContext } from "../contexts/UrlapContext";
import TodoItem from "./TodoItem";

export default function Todo() {
    const { todos, torolTodo, keszreAllit } = useContext(UrlapContext);

    if (!todos.length) {
        return <p style={{ marginTop: "20px" }}>Még nincs egy teendő sem.</p>;
    }

    return (
        <div style={{ width: "50%", margin: "20px auto" }}>
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        torolTodo={torolTodo}
                        keszreAllit={keszreAllit}
                    />
                ))}
            </ul>
        </div>
    );
}