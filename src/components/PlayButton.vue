<template>
  <button
    class="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full transition duration-200 aspect-1/1"
    @click="store.StartTimer"
    v-if="!store.hasStarted"
  >
    <Play />
  </button>

  <button
    class="bg-amber-500 hover:bg-amber-400 text-white p-4 rounded-full transition duration-200 aspect-1/1"
    @click="store.Pause"
    v-else-if="store.isRunning"
  >
    <Pause />
  </button>

  <button
    class="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full transition duration-200 aspect-1/1"
    @click="store.Resume"
    v-else
  >
    <Play />
  </button>
</template>
<script setup>
  import { useTimeStore } from "../store/timeStore";
  import { Play, Pause } from "lucide-vue-next";
  import { useSoundStore } from "../store/useSound.js";

  let sound = useSoundStore();
  const store = useTimeStore();
</script>
