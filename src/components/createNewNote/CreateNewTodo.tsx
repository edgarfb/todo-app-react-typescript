
import React from "react";
import { useTodos, useTodoDispatch } from "../../context/todoContext";
import styles from "./CreateNewTodo.module.css";


export default function CreateNewTodo() {
    const todos = useTodos();
    const dispatch = useTodoDispatch();
    return (
        <div className={styles.createNewTodo}>
            <input type="text" placeholder="Title" onKeyUp={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    dispatch({
                        type: 'ADD_TODO',
                        payload: {
                            id: Math.floor(Math.random() * 10000).toString(),
                            title: e.target.value,
                            completed: false,
                        }
                    });
                    e.target.value = '';
                }
            }} />
        </div>
    )
}




