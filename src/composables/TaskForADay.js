
import { useTaskStore } from "../store/taskStore";

export function TaskForADay(date){

    const taskStore = useTaskStore();

let TasksForThisDay = taskStore.tasks.filter(element => { return date === element.dueDate})

return TasksForThisDay;

}
