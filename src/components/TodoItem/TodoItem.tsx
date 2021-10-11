import React from "react";
import {Checkbox, IconButton, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {TTodoType} from "../../types/todoListTypes";

type Props = {
    item: TTodoType;
    updateStatus: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem = ({item, updateStatus, removeTodo}: Props) => {
    const updateTodoStatus = () => {
        updateStatus(item.id);
    }

    const remove = () => {
        removeTodo(item.id);
    }

    return (
        <Paper elevation={3} style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}} onClick={updateTodoStatus}>
                <Checkbox checked={item.completed} />
                <p style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.description}</p>
            </div>
            <IconButton aria-label="delete" onClick={remove}>
                <DeleteIcon />
            </IconButton>
        </Paper>
    );
};

export default TodoItem;