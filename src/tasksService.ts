export const saveTasks = (tasks: string[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const loadTasks = (): string[] => {
    try {
        return JSON.parse(localStorage.getItem("tasks") as string) || [];
    } catch (e) {
        console.warn("Cannot parse local storage data.", e);
        return [];
    }
}