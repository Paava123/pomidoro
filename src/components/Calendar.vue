<template>
  <div class="pt-20">
    <CalendarTopPart
      @month="SelMonth = $event"
      @year="SelYear = $event"
    ></CalendarTopPart>
    <CalendarBottomPart
      @selected-day="SelDay = $event"
      :year="SelYear"
      :month="SelMonth"
    ></CalendarBottomPart>
    <Task v-for="value in tasksForADay" :arr="value" :key="value.id"></Task>
  </div>
</template>
<script setup>
  import CalendarTopPart from "../components/CalendarTopPart.vue";
  import CalendarBottomPart from "./CalendarBottomPart.vue";
  import Task from "./Task.vue";
  import { TaskForADay } from "../composables/TaskForADay.js";
  import { ref, computed } from "vue";

  import { useTaskStore } from "../store/taskStore";

  const taskStore = useTaskStore();

  let SelYear = ref();
  let SelMonth = ref();
  let SelDay = ref();

  let tasksForADay = computed(() => {
    let TasksForThisDay = taskStore.tasks.filter((element) => {
      return SelDay.value === element.dueDate;
    });

    return TasksForThisDay;
  });
</script>
