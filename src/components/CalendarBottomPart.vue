<template>
  <div
    class="grid grid-cols-7 bg-slate-700/80 rounded-b-3xl p-6 border border-slate-800 shadow-xl shadow-black/20 gap-2"
  >
    <div
      v-for="(value, index) in MonthArray"
      :key="index"
      class="aspect-square rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-slate-300 font-black cursor-pointer text-3xl transition-all duration-200 hover:bg-slate-800 hover:scale-105 shadow-2xs focus:border-sky-500"
      :class="[
        isPickedDay(value)
          ? 'border-3 border-sky-500'
          : isCurrentDay(value)
            ? 'border-2 border-green-500'
            : '',
      ]"
      @click="emitCurrentDay(value)"
    >
      <div>
        {{ value.day }}
      </div>
      <div
        class="flex gap-1 items-center justify-center flex-wrap max-w-full overflow-hidden"
      >
        <div
          v-for="(task, index) in value.tasks"
          :key="index"
          class="w-2 h-2 rounded-full"
          :class="Priority(task)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref, toRef } from "vue";

  import { TaskForADay } from "../composables/TaskForADay";
  import { Priority } from "../composables/PriorityColor";

  const emit = defineEmits(["selectedDay"]);

  let props = defineProps({ year: Number, month: Number });
  const d = ref(new Date());
  let year = toRef(props, "year");
  let month = toRef(props, "month");
  let selDate = ref();

  const FirstDayOfTheWeek = computed(() => {
    let datee = new Date(year.value, month.value, 1);
    let FirstDay = (datee.getDay() + 6) % 7;
    return FirstDay;
  });

  const AmountOfDays = computed(() => {
    let datee = new Date(year.value, month.value + 1, 0);
    let Amount = datee.getDate();
    return Amount;
  });

  const MonthArray = computed(() => {
    let monthes = [];

    for (let i = 0; i < FirstDayOfTheWeek.value; i++) {
      monthes.push({
        year: null,
        month: null,
        day: null,
        date: null,
      });
    }

    for (let i = 1; i <= AmountOfDays.value; i++) {
      let CurDate = new Date(year.value, month.value, i + 1);
      CurDate = CurDate.toISOString().split("T")[0];

      let tasksThisDay = TaskForADay(CurDate);

      tasksThisDay = tasksThisDay.map((tasks) => tasks.priority);

      let tasks = monthes.push({
        year: year.value,
        month: month.value,
        day: i,
        date: CurDate,
        tasks: tasksThisDay,
      });
    }

    let daysToAdd =
      (7 - ((AmountOfDays.value + FirstDayOfTheWeek.value) % 7)) % 7;

    for (let i = 0; i < daysToAdd; i++) {
      monthes.push({
        year: null,
        month: null,
        day: null,
        date: null,
      });
    }

    return monthes;
  });

  function isCurrentDay(arr) {
    if (arr.date === d.value.toISOString().split("T")[0]) {
      return true;
    }
  }

  function isPickedDay(arr) {
    if (arr.date === selDate.value && arr.date !== null) {
      return true;
    }
  }

  function emitCurrentDay(array) {
    selDate.value = array.date;
    emit("selectedDay", selDate.value);
  }
</script>
