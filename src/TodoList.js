import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        props.todo1.map((todo) => (
            <Todo taskTodo={todo} key={todo.id} toggleTodo2={props.toggleTodo1} />
        ))
    );

}

export default TodoList;