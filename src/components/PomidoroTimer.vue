<template>
  <div class="grid grid-cols-3 w-1/2 m-auto mt-25 gap-10">
    <div
      class="col-span-2 bg-linear-to-br from-slate-900 via-slate-800 justify-between to-slate-800/80 flex flex-col border-3 rounded-4xl border-slate-900 p-5 gap-5 font-semibold text-4xl text-slate-400"
    >
      <div class="flex mx-auto p-3 items-center gap-5">
       
        <p>Focus</p>
       
      </div>
      <Timer class="min-h-1"></Timer>
      <div class="flex justify-center gap-8 mt-6">
        <button
          class="bg-red-500 hover:bg-red-400 text-white p-4 rounded-full transition"
          @click="store.Restart"
          v-if="store.hasStarted"
        >
          <RotateCcw />
        </button>

        <PlayButton />

        <button
          class="bg-violet-500 hover:bg-violet-400 text-white p-4 rounded-full transition"
          @click="store.FinishSession"
          v-if="store.hasStarted"
        >
          <SkipForward />
        </button>
      </div>
    </div>

    <div
      class="flex flex-col bg-slate-800 text-slate-400/80 font-semibold text-2xl p-5 rounded-xl items-center"
    >
      <div class="mb-5 text-3xl text-slate-600/90">Current route</div>
      <div
        v-for="(el, index) in store.sessions"
        :key="index"
        class="flex justify-between w-full p-4 border-b border-slate-700 rounded-xl"
        :class="CurrentIndex(index) ? 'bg-slate-600/95' : ''"
      >
        <span>{{ index + 1 }}. {{ el.type }}</span>

        <span
          >{{ DurationForShowingMinutes(el.duration) }} :
          {{ DurationForShowingSeconds(el.duration) }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import { useTimeStore } from "../store/timeStore";
  import Timer from "./Timer.vue";
  import {
    RotateCcw,
    MoveLeft,
    MoveRight,
    Pause,
    Play,
    SkipForward,
  } from "lucide-vue-next";
  import { DurationForShowingMinutes } from "../composables/TimeToMinutes";
  import { DurationForShowingSeconds } from "../composables/TimeToSeconds.";
  import PlayButton from "../components/PlayButton.vue";
  let store = useTimeStore();
  let time = ref(0);

  function CurrentIndex(index) {
    return index === store.currentIndex;
  }
</script>
