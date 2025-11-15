import { nanoid } from "nanoid/non-secure";
import localStorageApi from "./local-storage-api"; 
import { renderTaskList } from "./render-tasks";

export function onTaskFormSubmit(e) {
    e.preventDefault();
    const {taskName, taskDescription} = e.target.elements;
    const name = taskName.value.trim();
    const description = taskDescription.value.trim();
    if(!name || !description) {
        alert('Fill all the fields');
        return;
    }
    const task = {
        name,
        description,
        id: nanoid(),
    }
localStorageApi.saveTask(task);
renderTaskList(localStorageApi.getTasks());



    e.target.reset();
}