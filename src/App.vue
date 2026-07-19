<template>
  <NavBar></NavBar>
  <RouterView />
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";

  import { onMounted, onUnmounted, ref } from "vue";

  import { useTimeStore } from "./store/timeStore.js";

  import { useSoundStore } from "./store/useSound.js";

  let sound = useSoundStore();

  let store = useTimeStore();

  document.addEventListener("click", () => {
    sound.PlayClickSound();
  });

  onMounted(() => {
    if (store.isRunning) {
      store.Restore();
    }
  });
</script>
