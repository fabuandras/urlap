import React from "react";

export default function TodoItem({ todo, torolTodo, keszreAllit }) {

    let stilus = {};
    if (!todo.done && new Date(todo.date) < new Date()) {
        stilus = { backgroundColor: "#f8d7da" };
    }

    let atHuzas = "none";
    if (todo.done) {
        atHuzas = "line-through";
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" style={stilus}>
            <div>
                <input type="checkbox" checked={todo.done} onChange={() => keszreAllit(todo.id)} className="me-2" />

                <span style={{ textDecoration: atHuzas }}>
                    {todo.text}
                </span>

                <small className="text-muted ms-2">({todo.date})</small>
            </div>

            <button className="btn btn-danger btn-sm" onClick={() => torolTodo(todo.id)} >Törlés</button>
        </li>
    );
}