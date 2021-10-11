import React, {useState} from 'react';
import { useStore } from "effector-react";
import {$todos, removeTodo, updateStatusTodo, addTodo} from "../../effector/todoList/todoList";
import {Container, Fab, Paper} from "@mui/material";
import TodoItem from "../../components/TodoItem/TodoItem";
import AddIcon from '@mui/icons-material/Add';
import TodoCreateDialog from "../../components/TodoCreateDialog/TodoCreateDialog";

const TodoList = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const todos = useStore($todos);

    const handleClickOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const onSubmit = (description: string) => {
        addTodo({
            id: Math.random(),
            description: description,
            completed: false,
        })
    }

    return (
        <>
            <Container maxWidth="sm" style={{marginTop: '20px'}}>
                <Paper elevation={1} style={{padding: '10px 15px'}}>
                    <h1>Todo list</h1>
                </Paper>
                {!todos.length && (
                    <Paper elevation={3} style={{marginTop: '15px', padding: '3px', textAlign: 'center'}}>
                        <p>No tasks created yet</p>
                    </Paper>
                )}
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            item={todo}
                            removeTodo={removeTodo}
                            updateStatus={updateStatusTodo}
                        />
                    );
                })}
                <Fab color="primary" aria-label="add" style={{marginTop: 15}} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Container>
            <TodoCreateDialog
                open={openModal}
                onClose={handleClose}
                createTodo={onSubmit}
            />
        </>
    );
};

export default TodoList;