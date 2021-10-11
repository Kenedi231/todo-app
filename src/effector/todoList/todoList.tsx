import {createStore, createEvent} from "effector";
import {TTodoType} from "../../types/todoListTypes";
import {addTodoHandler, removeTodoHandler, updateStatusTodoHandler} from "./todoListHandlers";

// create store
export const $todos = createStore<TTodoType[]>([
    {
        id: 1,
        description: 'Покормить кота',
        completed: false,
    }
]);

// create events
export const addTodo = createEvent<TTodoType>();
export const updateStatusTodo = createEvent<number>();
export const removeTodo = createEvent<number>();
export const clearTodos = createEvent();

$todos
    .on(addTodo, addTodoHandler)
    .on(updateStatusTodo, updateStatusTodoHandler)
    .on(removeTodo, removeTodoHandler)
    .reset(clearTodos);
