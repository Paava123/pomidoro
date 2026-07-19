<template>
  <div class="w-7/10 m-auto grid grid-cols-3 p-10 gap-20 text-xl pb-42">
    <TaskInput></TaskInput>
    <TaskFilter
      @searching="(n) => (Search = n)"
      @prioritise="(n) => (Prioritise = n)"
    ></TaskFilter>
    <TaskPage :searching="Search" :priority="Prioritise"></TaskPage>
  </div>
</template>
<script setup>
  import TaskPage from "../components/TaskPage.vue";
  import TaskInput from "../components/TaskInput.vue";
  import TaskFilter from "../components/TaskFilter.vue";
  import { ref } from "vue";

  let Search = ref("");
  let Prioritise = ref("");
</script>
