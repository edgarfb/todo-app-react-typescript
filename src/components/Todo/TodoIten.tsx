import React from 'react';
import styles from './TodoIten.module.css';
import { Todo } from '../../types/todos';

interface TodoProps {
   todo: Todo;
}

export default function TodoIten({ todo }: TodoProps) {
   return (
      <div className={styles.todoIten}>
         <input type="checkbox" checked={todo.completed} />
         <span>{todo.title}</span>
         <button onClick={(e) => console.log('clicked')}>X</button>
      </div>
   )
}

// TODO: Add a button to delete the todo
// TODO: Add a button to edit the todo
// TODO: Add a button to complete the todo
