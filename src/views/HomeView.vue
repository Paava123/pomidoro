<template>
  <div
    class="w-3/5 justify-between bg-gradient-to-br from-slate-900 to-slate-700 mt-10 rounded-4xl m-auto min-h-1/3 p-10 grid grid-cols-2 gap-10 mb-50"
  >
    <div class="col-span-2 text-slate-300 text-4xl font-semibold">
      <p class="text-6xl">Hello, user!</p>
      <p>Today is: {{ todaysDate.day }} {{ WhatMonth(todaysDate.month) }}</p>
    </div>
    <div
      class="grid grid-cols-1 h-full items-center justify-center gap-10 bg-slate-900/20 p-10 rounded-xl col-span-2 hover:bg-slate-800/30 transition-all duration-300"
    >
      <div
        class="flex items-center gap-2 font-semibold text-slate-300 text-3xl"
      >
        <TimerIcon :size="24" />
        <p class="font-semibold">Pomodoro</p>
      </div>
      <Timer></Timer>
      <div class="w-full flex justify-center">
        <PlayButton />
      </div>
    </div>
    <div
      class="flex flex-col h-full text-3xl text-slate-500 bg-slate-900/20 p-5 rounded-xl gap-5 hover:bg-slate-800/30 transition-all duration-300"
    >
      <div class="flex items-center gap-2 font-semibold text-slate-300">
        <CheckCircle2 :size="24" />
        <p class="font-semibold">Tasks for today</p>
      </div>

      <ul v-if="tasksForADay.length">
        <li
          class="border-b border-slate-100 py-2 last:border-none"
          v-for="value in tasksForADay.slice(0, 3)"
          :key="value.id"
        >
          {{ value.title }}
        </li>
      </ul>
      <p v-else>No tasks for today! =)</p>
    </div>

    <div
      class="flex flex-col h-full text-3xl text-slate-500 bg-slate-900/20 p-5 rounded-xl gap-5 hover:bg-slate-800/30 transition-all duration-300"
    >
      <div class="flex items-center gap-2 font-semibold text-slate-300">
        <CalendarDays :size="24" />
        <p class="font-semibold">Upcoming deadlines</p>
      </div>

      <ul v-if="tasksForADay.length">
        <li
          class="border-b border-slate-100 py-2 last:border-none"
          v-for="value in tasksForADay.slice(0, 3)"
          :key="value.id"
        >
          {{ value.title }} - {{ value.dueDate }}
        </li>
      </ul>
      <p v-else>No upcoming deadlines! =)</p>
    </div>
  </div>
</template>
<script setup>
  import { TimerIcon, CalendarDays, CheckCircle2 } from "lucide-vue-next";
  import PlayButton from "../components/PlayButton.vue";
  import Timer from "../components/Timer.vue";
  import { WhatMonth } from "../composables/WhatMonth.js";
  import { useTaskStore } from "../store/taskStore.js";
  import { computed } from "vue";

  let tasks = useTaskStore();

  let todaysDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  let TDate = new Date(todaysDate.year, todaysDate.month, todaysDate.day + 1)
    .toISOString()
    .split("T")[0];

  let tasksForADay = computed(() => {
    let TasksForThisDay = tasks.tasks.filter((element) => {
      return TDate === element.dueDate;
    });

    return TasksForThisDay;
  });
  let today = new Date();
  let upcomingDeadlines = computed(() => {
    let FutureTasks = tasks.tasks.filter((element) => {
      return today <= new Date(element.dueDate);
    });

    FutureTasks.sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

    FutureTasks.slice(0, 5);
    return FutureTasks;
  });
</script>
