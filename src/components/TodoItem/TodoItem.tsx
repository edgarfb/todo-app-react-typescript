import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { Todo } from '../../types/todos';
import { useTodoDispatch } from '../../context/todoContext';
import Checkbox from '../UI/Checkbox/Checkbox';


interface TodoProps {
   todo: Todo;
}

export default function TodoIten({ todo }: TodoProps) {
   const [showBtnCross, setShowBtnCross] = useState(false);
   const dispatch = useTodoDispatch();
   return (
      <div className={styles.todoIten}
         onMouseEnter={() => setShowBtnCross(true)}
         onMouseLeave={() => setShowBtnCross(false)}
      >
         <Checkbox isChecked={todo.completed} todoId={todo.id} />

         <span
            className={`${styles.ItenTitle} ${todo.completed ? styles.done : ''}`}
            onClick={() => {
               dispatch({
                  type: "MAKE_TODO_COMPLETED",
                  payload: {
                     id: todo.id,
                     completed: !todo.completed
                  }
               })
            }}
         >{todo.title}</span>
         <button
            className={`${styles.btnCrossHidden} ${showBtnCross ? styles.btnCross : ''}`}
            onClick={() => {
               dispatch({
                  type: "REMOVE_TODO",
                  payload: {
                     id: todo.id,
                  }
               });
            }}>
            <img src="./images/icon-cross.svg" alt="" />
         </button>
      </div>
   )
}

