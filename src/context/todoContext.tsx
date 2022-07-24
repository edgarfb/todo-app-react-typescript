import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { Todo } from '../types/todos';

interface Actions {
    type: string;
    payload: any;
}

type State = Todo[] | [];





// const initialState:State = [];
const initialState = [
    {
        completed: false,
        id: "847",
        title: "Go to the supermarket",
    },
    {
        completed: false,
        id: "1098",
        title: "Buy motorcycle oil",
    },
    {
        completed: false,
        id: "3728",
        title: "Eat some stuff",
    },
];


export const TodoContext = createContext<State>(initialState);
export const TodoContextDispatch = createContext<React.Dispatch<Actions>>(() => { });

type TodoContextProviderProps = {
    children: React.ReactElement;
}

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={state}>
            <TodoContextDispatch.Provider value={dispatch}>
                {children}
            </TodoContextDispatch.Provider>

        </TodoContext.Provider>
    );
}

export const useTodos = () => {
    return useContext(TodoContext)
}

export const useTodoDispatch = () => {
    return useContext(TodoContextDispatch)
}

function todoReducer(state: State, action: Actions) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "MAKE_TODO_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    console.log('im here')
                    return { ...todo, completed: action.payload.completed }
                }
                return todo
            })

        default:
            return state

    }
}