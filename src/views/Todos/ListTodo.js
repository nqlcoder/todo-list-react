import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            {
                id: "todo1",
                title: "Doing homework",
            },
            {
                id: "todo2",
                title: "Making video",
            },
            {
                id: "todo3",
                title: "Fixing bug",
            },
        ],
        editTodo: {},
    };

    addTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });

        toast.success("wow so easy!");
    };

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter((item) => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo,
        });

        toast.success("Delete success!");
    };

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex(
                (item) => item.id === todo.id
            );

            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {},
            });
            toast.success("Update todo successfully");
            return;
        }
        // edit
        this.setState({
            editTodo: todo,
        });
    };

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="list-todo-container">
                    <AddTodo addTodo={this.addTodo} />

                    <div className="list-todo-content">
                        {listTodos &&
                            listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ? (
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        ) : (
                                            <>
                                                {editTodo.id === item.id ? (
                                                    <span>
                                                        {index + 1} -{" "}
                                                        <input
                                                            value={
                                                                editTodo.title
                                                            }
                                                            onChange={(event) =>
                                                                this.handleOnChangeEditTodo(
                                                                    event
                                                                )
                                                            }
                                                        />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {index + 1} -{" "}
                                                        {item.title}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                        <button
                                            className="edit"
                                            onClick={() =>
                                                this.handleEditTodo(item)
                                            }
                                        >
                                            {isEmptyObj === false &&
                                            editTodo.id === item.id
                                                ? "Save"
                                                : "Edit"}
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() =>
                                                this.handleDeleteTodo(item)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </>
        );
    }
}

export default ListTodo;
