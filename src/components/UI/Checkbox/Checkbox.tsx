import React, { useState } from 'react'
import styles from './Checkbox.module.css'
import { useTodoDispatch } from '../../../context/todoContext';
interface checkboxProps {
    isChecked: boolean;
    todoId: string;
}

export default function Checkbox({ isChecked, todoId }: checkboxProps) {
    const dispatch = useTodoDispatch();
    const [isCheckHover, setIsCheckHover] = useState(false);
    return (
        <div className={`${styles.checkboxContainer} ${isCheckHover ? styles.checkboxContainerBorder : ''} ${isChecked ? styles.checkboxContainerChecked : ''}`}>
            <div className={`${styles.notChecked} ${isChecked ? styles.checked : ''}`}>
                {isChecked && <img className={styles.checkIcon} src="./images/icon-check.svg" alt="" />}
            </div>
            <label htmlFor={todoId} style={{ display: "none" }}>Create a new todo...</label>
            <input type="checkbox" id={todoId} className={styles.checkboxInput} checked={isChecked}
                onMouseEnter={() => setIsCheckHover(true)}
                onMouseLeave={() => setIsCheckHover(false)}
                onChange={(e) => {

                    dispatch({
                        type: "MAKE_TODO_COMPLETED",
                        payload: {
                            id: todoId,
                            completed: e.target.checked
                        },
                    })
                }} />

        </div>
    )
}
