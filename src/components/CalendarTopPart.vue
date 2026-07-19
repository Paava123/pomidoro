<template>
  <div
    class="grid grid-cols-1 bg-slate-900/80 rounded-t-3xl p-6 border border-slate-800 shadow-xl shadow-black/20 text-slate-400 text-xl font-semibold"
  >
    <div class="flex p-2 items-center justify-between px-7">
      <button @click="monthMinus"><-</button>
      <div>{{ year }} {{ WhatMonth(month) }}</div>
      <button @click="monthAdd">-></button>
    </div>
    <div class="grid grid-cols-7">
      <div
        v-for="number in arr"
        :key="number"
        class="flex items-center justify-center text-center uppercase tracking-wider aspect-5/3"
      >
        {{ DayOfTheWeeks(number) }}
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref } from "vue";
  import { WhatMonth } from "../composables/WhatMonth";
  let arr = [0, 1, 2, 3, 4, 5, 6];

  const emit = defineEmits(["year", "month", "selectedDay"]);

  let year = ref(new Date().getFullYear());
  let month = ref(new Date().getMonth());

  emit("year", year.value);
  emit("month", month.value);
  function monthAdd() {
    month.value++;
    if (month.value > 11) {
      year.value++;
      month.value = 0;
      emit("year", year.value);
    }

    emit("month", month.value);
  }

  function monthMinus() {
    month.value--;
    if (month.value === 0) {
      year.value--;
      month.value = 11;
      emit("year", year.value);
    }

    emit("month", month.value);
  }

  function DayOfTheWeeks(number) {
    switch (number) {
      case 0:
        return "Mon";
      case 1:
        return "Tue";
      case 2:
        return "Wed";
      case 3:
        return "Thu";
      case 4:
        return "Fri";
      case 5:
        return "Sat";
      case 6:
        return "Sun";
    }
  }
</script>
