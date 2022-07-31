

import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TodoSorter.module.css'

export default function TodoSorter() {
    return (
        <div className={styles.todosSorter}>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">All</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/active">Active</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/completed">Completed</NavLink>
        </div>
    )
}
