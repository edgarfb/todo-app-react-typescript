import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import styles from './TodoContainer.module.css'
import { useTodos } from '../../context/todoContext';

import CreateNewTodo from '../createNewNote/CreateNewTodo';
import All_todos from '../../pages/All_todos';
import Completed from '../../pages/Completed';
import Active_Todos from '../../pages/Active_Todos';

export default function TodoContainer() {

    const todos = useTodos();
    return (
        <div className={styles.todosContainer}>
            <Router>
                <CreateNewTodo />

                <div className={styles.todosList}>
                    <Routes>
                        <Route path="/" element={<All_todos />} />
                        <Route path="/active" element={<Active_Todos />} />
                        <Route path="/completed" element={<Completed />} />
                    </Routes>
                </div>


                <div className={styles.todosSorter}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">All</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/active">Active</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/completed">Completed</NavLink>


                </div>
            </Router>


        </div>
    )
}
