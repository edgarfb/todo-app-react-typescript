import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { useTodos } from '../../context/todoContext';

import CreateNewTodo from '../createNewNote/CreateNewTodo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import TodoList from '../TodoList/TodoList';
import TodoSorter from '../TodoSorter/TodoSorter';

import styles from './TodoContainer.module.css'




export default function TodoContainer() {

    const todos = useTodos();


    return (
        <div className={styles.todosContainer}>
            <Router>

                <header className={styles.todoHeader}>
                    <h1>
                        <Link to="/">TODO</Link>
                    </h1>
                    <ThemeSwitcher />
                </header>

                <CreateNewTodo />

                <TodoList />

                <TodoSorter />
            </Router>


        </div>
    )
}
