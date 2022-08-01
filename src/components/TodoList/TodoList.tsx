import React from 'react'
import styles from './TodoList.module.css'
import All_todos from '../../pages/All_todos';
import Completed from '../../pages/Completed';
import Active_Todos from '../../pages/Active_Todos';
import {
    Routes,
    Route,
} from "react-router-dom";




export default function TodoList() {
    return (
        <main className={styles.todosList}>
            <Routes>
                <Route path="/" element={<All_todos />} />
                <Route path="/active" element={<Active_Todos />} />
                <Route path="/completed" element={<Completed />} />
            </Routes>

        </main>
    )
}
