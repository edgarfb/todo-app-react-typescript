import React from 'react'
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import { useTheme, useSetTheme } from '../../context/themeContext';
import { useTodos } from '../../context/todoContext';

import CreateNewTodo from '../createNewNote/CreateNewTodo';
import TodoList from '../TodoList/TodoList';

import styles from './TodoContainer.module.css'

export default function TodoContainer() {

    const todos = useTodos();
    const theme = useTheme();
    const setTheme = useSetTheme();
    return (
        <div className={styles.todosContainer}>
            <Router>

                <div className={styles.todoHeader}>
                    <h1>TODO</h1>
                    <div className="themeSwitcher">
                        <img src="./images/icon-moon.svg" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} alt="" />
                    </div>
                </div>

                <CreateNewTodo />

                <TodoList />

                <div className={styles.todosSorter}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">All</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/active">Active</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/completed">Completed</NavLink>
                </div>
            </Router>


        </div>
    )
}
