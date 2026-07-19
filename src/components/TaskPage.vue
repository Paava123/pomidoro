<template>
  <TransitionGroup name="list">
    <Task v-for="ars in filtered" :arr="ars" :key="ars.id" tag="div"></Task
  ></TransitionGroup>
</template>

<script setup>
  import Task from "../components/Task.vue";
  import { useTaskStore } from "../store/taskStore.js";
  import { ref, watchEffect } from "vue";

  let tasksStore = useTaskStore();

  let tasks = ref(tasksStore.tasks);
  let filtered = ref([]);
  let props = defineProps(["searching", "priority"]);

  watchEffect(() => {
    filtered.value = tasksStore.filterTasks(props.searching, props.priority);
  });
</script>

<style scoped>
  .list-enter-from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }

  .list-enter-active {
    transition: all 200ms ease;
  }

  .list-leave-to {
    opacity: 0;
    transform: translateX(-12px);
  }

  .list-leave-active {
    transition: all 180ms ease;
  }

  .list-move {
    transition: transform 200ms ease;
  }
</style>
