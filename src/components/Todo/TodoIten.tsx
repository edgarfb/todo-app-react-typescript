import React, { useState } from 'react';
import styles from './TodoIten.module.css';
import { Todo } from '../../types/todos';
import { useTodoDispatch } from '../../context/todoContext';

interface TodoProps {
   todo: Todo;
}

export default function TodoIten({ todo }: TodoProps) {
   const [isTodoCompleted, setIsTodoCompleted] = useState(false);
   const dispatch = useTodoDispatch();
   return (
      <div className={styles.todoIten}>
         <input type="checkbox" onChange={(e) => {
            setIsTodoCompleted((prev) => prev = e.target.checked)
            dispatch({
               type: "MAKE_TODO_COMPLETED",
               payload: {
                  id: todo.id,
                  completed: e.target.checked
               },
            })
         }} />
         <span className={`${isTodoCompleted ? styles.completed : ''}`}>{todo.title}</span>
         <button onClick={() => {
            dispatch({
               type: "REMOVE_TODO",
               payload: {
                  id: todo.id,
               }
            });
         }}>X</button>
      </div>
   )
}

// TODO: Add a button to delete the todo
// TODO: Add a button to edit the todo
// TODO: Add a button to complete the todo
