import {TTodoType} from "../../types/todoListTypes";

export const addTodoHandler = (state: TTodoType[], newTodo: TTodoType) => {
    return [
        ...state,
        newTodo,
    ];
};

export const updateStatusTodoHandler = (state: TTodoType[], todoId: number) => {
    const todoIndex = state.findIndex((todo) => todo.id === todoId);
    const currentTodo = state[todoIndex];

    state.splice(todoIndex, 1, {
        ...currentTodo,
        completed: !currentTodo.completed,
    });

    return [...state];
};

export const removeTodoHandler = (state: TTodoType[], todoId: number) => {
    const todoIndex = state.findIndex((todo) => todo.id === todoId);
    state.splice(todoIndex, 1);
    return [...state];
};