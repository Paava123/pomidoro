<template>
  <div
    class="bg-slate-900 items-center justify-between border-6 rounded-3xl p-6 flex flex-col gap-8 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-500/10 border-slate-500"
  >
    <p class="text-4xl font-bold text-slate-300">Find your tasks!</p>
    <input
      type="text"
      placeholder="Search..."
      class="border-1 border-slate-500/80 rounded-xl p-1 text-slate-500"
      v-model="Search"
    />
    <div class="grid grid-cols-4 gap-6 w-full justify-center items-center">
      <p class="col-span-4 text-2xl text-slate-400 font-semibold">Priority:</p>
      <div
        class="w-1/1 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ring-3 ring-slate-700 scale-105 bg-slate-500 inset-ring-green"
        type="radio"
        name="prior"
        @click="SelectedPriority = 'all'"
      ></div>

      <div
        class="w-1/1 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ring-3 ring-slate-700 scale-105 bg-green-500 inset-ring-green"
        type="radio"
        name="prior"
        @click="SelectedPriority = 'low'"
      ></div>
      <div
        class="w-1/1 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ring-3 ring-slate-700 scale-105 bg-yellow-500 inset-ring-green"
        type="radio"
        name="prior"
        @click="SelectedPriority = 'medium'"
      ></div>
      <div
        class="w-1/1 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ring-3 ring-slate-700 scale-105 bg-rose-500 inset-ring-green"
        type="radio"
        name="prior"
        @click="SelectedPriority = 'high'"
      ></div>
    </div>
  </div>
</template>
<script setup>
  import { ref, watch } from "vue";

  let emits = defineEmits(["searching", "prioritise"]);

  let Search = ref("");
  let SelectedPriority = ref("all");

  emits("searching", Search.value);
  emits("prioritise", SelectedPriority.value);

  watch(Search, (val) => {
    emits("searching", val);
  });

  watch(SelectedPriority, (val) => {
    emits("prioritise", val);
  });
</script>
