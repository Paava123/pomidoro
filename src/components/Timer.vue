<template>
  <div
    class="text-7xl font-bold text-white tracking-wider py-10 bg-slate-700/60 rounded-2xl text-center"
  >
    {{ DurationForShowingMinutes(store.remainingTime) }} :
    {{ DurationForShowingSeconds(store.remainingTime) }}
  </div>
</template>
<script setup>
  import { useTimeStore } from "../store/timeStore";
  import { DurationForShowingMinutes } from "../composables/TimeToMinutes";
  import { DurationForShowingSeconds } from "../composables/TimeToSeconds.";
  let store = useTimeStore();
</script>
