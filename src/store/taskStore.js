import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useTaskStore = defineStore('tasks', ()=> {
  
    let tasks = ref([]);

    function CompleteTask(id){
        const task = tasks.value.find(task => task.id === id)

    if (task) {
        task.completed = !task.completed
    }
    }

    function deleteTask(id){

tasks.value = tasks.value.filter(task => task.id !== id);

    }

    function editTask(id){
        const task = tasks.value.find(task => task.id === id);

        if(task){
            task.editing = !task.editing;
        }
    }

    function saveTask(id, newTask){
        let task = tasks.value.find(task => task.id === id);

        if(task){
           Object.assign(task,newTask)
            task.editing = false;
        }

        

    }

    function filterTasks(Search, Priority){
       
let filtered = tasks.value.filter(task => (task.title.toLowerCase().includes(Search.toLowerCase()) || task.desc.toLowerCase().includes(Search.toLowerCase())) || Search === "" )
        
filtered = filtered.filter(task => task.priority === Priority || Priority === "all")

return filtered;

    }

    return {tasks,CompleteTask, deleteTask, editTask, saveTask,filterTasks};


},{  persist: true})