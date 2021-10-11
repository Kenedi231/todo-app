import React from "react";
import {Button, Dialog, DialogTitle, Paper, TextField} from "@mui/material";
import { useForm } from "react-hook-form";

type TodoCreateDialogProps = {
    open: boolean;
    onClose: () => void;
    createTodo: (description: string) => void;
}

const TodoCreateDialog = ({open, onClose, createTodo}: TodoCreateDialogProps) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any) => {
        createTodo(data.description);
        reset();
        handleClose();
    };
    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Create task</DialogTitle>
            <Paper elevation={0} style={{margin: 5, padding: '10px 15px'}}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField id="outlined-basic" label="Task" variant="outlined" {...register('description')} />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 15}}>
                        <Button onClick={handleClose} variant="outlined">Close</Button>
                        <Button onClick={handleSubmit(onSubmit)} variant="contained">Create</Button>
                    </div>
                </form>
            </Paper>
        </Dialog>
    );
};

export default TodoCreateDialog;