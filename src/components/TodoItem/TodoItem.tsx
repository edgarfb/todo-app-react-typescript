import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { Todo } from '../../types/todos';
import { useTodoDispatch } from '../../context/todoContext';
import Checkbox from '../UI/Checkbox/Checkbox';


interface TodoProps {
   todo: Todo;
}

export default function TodoIten({ todo }: TodoProps) {

   const dispatch = useTodoDispatch();
   return (
      <div className={styles.todoIten}>
         <Checkbox isChecked={todo.completed} todoId={todo.id} />

         <span className={`${todo.completed ? styles.completed : ''}`}>{todo.title}</span>
         <button onClick={() => {
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

