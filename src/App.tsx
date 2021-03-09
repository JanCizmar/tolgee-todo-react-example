import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@material-ui/core";
import {loadTasks, saveTasks} from "./tasksService";

function App() {
    const [taskTextValue, setTaskTextValue] = useState("");
    const [tasks, setTasks] = useState(loadTasks());

    const addDisabled = !taskTextValue;

    const add = () => {
        const newTasks = [...tasks, taskTextValue];
        setTasks(newTasks);
        saveTasks(newTasks);
        setTaskTextValue("");
    }

    const remove = (index: number) => {
        tasks.splice(index, 1);
        setTasks([...tasks]);
        saveTasks(tasks);
    }

    return (
        <div>
            <header>
                <Container maxWidth="sm">
                    <Box mt={4}>
                        <Typography variant="h3">My very cool To Do App</Typography>
                        <Typography variant="body1">Welcome to my brand new to do app!</Typography>
                    </Box>
                    <Box mt={5}>
                        <Box display="flex">
                            <Box flexGrow={1}>
                                <TextField size={"small"} fullWidth value={taskTextValue}
                                           onChange={event => setTaskTextValue(event.target.value)}
                                           id="filled-basic" label="New task" variant="outlined"
                                />
                            </Box>
                            <Box ml={2} display="inline">
                                <Button onClick={add} disabled={addDisabled} size="large" color="primary" variant="outlined">Add</Button>
                            </Box>
                        </Box>

                        <Box mt={4}>
                            {tasks.map((t, index) =>
                                <Box key={index} mt={3} display="flex">
                                    <Box flexGrow={1} alignItems="center">
                                        <Typography variant="subtitle1">{t}</Typography>
                                    </Box>
                                    <Button color="secondary" onClick={() => remove(index)}>Delete</Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Container>
            </header>
        </div>
    );
}

export default App;
