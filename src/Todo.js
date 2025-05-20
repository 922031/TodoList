import React from "react";

const Todo = (props) => {
    const handleTodoClick = () => {
        props.toggleTodo2(props.taskTodo.id);

    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={props.taskTodo.completed}
                    readOnly
                    onChange={handleTodoClick}
                />
            </label>
            {props.taskTodo.name};
        </div>
    );
};

export default Todo;