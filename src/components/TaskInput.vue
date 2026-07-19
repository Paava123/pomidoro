<template>
  <div
    class="bg-slate-900 items-center justify-center border-6 rounded-3xl p-6 flex flex-col gap-8 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-500/10 border-slate-500"
  >
    <div class="w-full items-center flex flex-col gap-5">
      <div class="w-full flex flex-col gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">title:</p>
        <input
          class="border-1 border-slate-500/80 rounded-xl p-1 text-slate-500"
          placeholder="Enter title"
          v-model="title"
        />
      </div>
      <div class="w-full flex flex-col gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">
          description:
        </p>
        <input
          class="border-1 border-slate-500/80 rounded-xl p-1 text-slate-500"
          placeholder="Enter description"
          v-model="description"
        />
      </div>
      <div class="w-full flex flex-col gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">Priority:</p>
        <div class="grid grid-cols-3 items-center justify-center">
          <div
            @click="priority = 'high'"
            :class="
              priority === 'high'
                ? 'ring-3 ring-slate-700 scale-105 bg-rose-500 inset-ring-green'
                : 'bg-red-500'
            "
            class="w-1/2 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
          />
          <div
            @click="priority = 'medium'"
            :class="
              priority === 'medium'
                ? 'ring-3 ring-slate-700 scale-105 bg-yellow-400'
                : 'bg-yellow-500'
            "
            class="w-1/2 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
          />
          <div
            @click="priority = 'low'"
            :class="
              priority === 'low'
                ? 'ring-3 ring-slate-700 scale-105 bg-green-400'
                : ' bg-green-500'
            "
            class="w-1/2 aspect-1/1 m-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
          />
        </div>
      </div>
      <div class="w-full flex flex-col gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">Due Date:</p>
        <input
          type="date"
          v-model="duedate"
          class="border-1 border-slate-500/80 rounded-xl p-1 text-slate-500"
        />
      </div>
      <p class="hidden"></p>
    </div>
    <button
      class="font-semibold transition-all duration-300 text-xl rounded-xl px-6 py-3 transition-all duration-200 -my-3 hover:scale-105 text-slate-950"
      :class="
        IsThereATitle
          ? 'bg-green-400 hover:bg-green-300'
          : 'bg-red-600 hover:bg-red-500'
      "
      @click="Add()"
    >
      {{ addText }}
    </button>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  let priority = ref("low");
  let duedate = ref();
  let title = ref();
  let description = ref();
  let addText = ref("Add");
  let IsThereATitle = ref(true);

  import { useTaskStore } from "../store/taskStore";

  let tasksStore = useTaskStore();

  function Add() {
    if (title.value === "" || !title.value) {
      addText.value = "Title required";
      IsThereATitle.value = false;
      return;
    }

    let NewTask = {
      id: Date.now(),
      title: title.value ?? "default title",
      desc: description.value ?? "default description",
      priority: priority.value ?? "low",
      dueDate: duedate.value ?? "No date given",
      completed: false,
      editing: false,
    };

    priority.value = "low";
    duedate.value = "";
    title.value = "";
    description.value = "";
    addText.value = "Add";
    IsThereATitle.value = true;
    tasksStore.tasks.push(NewTask);
  }
</script>
