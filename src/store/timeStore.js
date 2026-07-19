import { TextInitial } from "lucide-vue-next";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTimeStore = defineStore(
  "timer",
  () => {
    const isRunning = ref(false);
    const currentIndex = ref(0);
    const hasStarted = ref(false);
    const whenEnds = ref(null);
    const remainingTime = ref(0);

    const intervalId = ref(null);

    let sessions = [
      { type: "focus", duration: 1500 },
      { type: "break", duration: 300 },
      { type: "focus", duration: 1500 },
      { type: "break", duration: 300 },
      { type: "focus", duration: 1500 },
      { type: "break", duration: 300 },
      { type: "focus", duration: 1500 },
      { type: "long break", duration: 900 },
    ];

    function StartTimer() {
      clearInterval(intervalId.value);
      isRunning.value = true;
      hasStarted.value = true;

      whenEnds.value =
        Date.now() + sessions[currentIndex.value].duration * 1000;

      intervalId.value = setInterval(Tick, 250);
    }

    function Tick() {
      remainingTime.value = Math.floor((whenEnds.value - Date.now()) / 1000);

      if (remainingTime.value <= 0) {
        
        FinishSession();
      }
    }

    function FinishSession() {
      remainingTime.value = 0;

      currentIndex.value = (currentIndex.value + 1) % sessions.length;

      clearInterval(intervalId.value);

        whenEnds.value =
        Date.now() + sessions[currentIndex.value].duration * 1000;
        Tick();

      if (isRunning.value) {
        StartTimer();
      }
    }

    function Pause() {
      isRunning.value = false;
      remainingTime.value = (whenEnds.value - Date.now()) / 1000;
      clearInterval(intervalId.value);
    }

    function Resume() {
      clearInterval(intervalId.value);
      isRunning.value = true;

      whenEnds.value = Date.now() + remainingTime.value * 1000;

      intervalId.value = setInterval(Tick, 250);
    }

    function Restore() {
      if (isRunning.value === false) {
        return;
      }

      const left = Math.floor((whenEnds.value - Date.now()) / 1000);

      if (left <= 0) {
        FinishSession();
        return;
      }

      remainingTime.value = left;

      intervalId.value = setInterval(Tick, 250);
    }

    function Restart() {
      clearInterval(intervalId.value);
      hasStarted.value = false;
      isRunning.value = false;
      remainingTime.value = 0;
      currentIndex.value = 0;
    }

    return {
      whenEnds,
      isRunning,
      remainingTime,
      currentIndex,
      hasStarted,
      sessions,
      StartTimer,
      Restore,
      FinishSession,
      Pause,
      Resume,
      Restart,
    };
  },
  { persist: true },
);
