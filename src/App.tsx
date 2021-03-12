import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@material-ui/core";
import {loadTasks, saveTasks} from "./tasksService";
import {T} from "@tolgee/react";
import {ListAlt} from "@material-ui/icons";
import {LanguageMenu} from "./LanguageMenu";

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
                    <Box mt={2} display="flex" justifyContent="space-between">
                        <ListAlt fontSize={"large"}/>
                        <LanguageMenu/>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h3"><T>My ToDo App</T></Typography>
                        <Typography variant="body1"><T>Welcome to my brand new to do app!</T></Typography>
                    </Box>
                    <Box mt={5}>
                        <Box display="flex">
                            <Box flexGrow={1}>
                                <TextField size={"small"} fullWidth value={taskTextValue}
                                           onChange={event => setTaskTextValue(event.target.value)}
                                           id="filled-basic" label={<T>New task</T>} variant="outlined"
                                />
                            </Box>
                            <Box ml={2} display="inline">
                                <Button onClick={add} disabled={addDisabled} size="large" color="primary" variant="outlined"><T>Add</T></Button>
                            </Box>
                        </Box>

                        <Box mt={4}>
                            {tasks.map((t, index) =>
                                <Box key={index} mt={3} display="flex">
                                    <Box flexGrow={1} alignItems="center">
                                        <Typography variant="subtitle1">{t}</Typography>
                                    </Box>
                                    <Button color="secondary" onClick={() => remove(index)}><T>Delete</T></Button>
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
