<template>
  <div
    v-bind:class="Priority(props.arr.priority)"
    class="bg-slate-900 items-center justify-center border-6 rounded-3xl p-3 pb-5 flex flex-col gap-8 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-500/10"
  >
    <div
      class="divide-white/15 divide-y w-full items-center flex flex-col gap-4"
    >
      <div class="w-full -gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">title:</p>

        <p
          class="pb-3 text-2xl font-bold w-full justify-center"
          :class="
            props.arr.completed
              ? 'line-through text-slate-200/90'
              : 'text-slate-100'
          "
          v-if="!props.arr.editing"
        >
          {{ props.arr.title }}
        </p>

        <input
          class="w-full text-slate-100 placeholder:text-slate-500 border border-slate-800 rounded-xl p-1 mb-1 text-2xl font-bold"
          v-else
          v-model="react.title"
        />
      </div>
      <div class="w-full -gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">
          description:
        </p>
        <p
          class="text-xl pb-3 text-slate-400 font-semibold w-full"
          :class="
            props.arr.completed
              ? 'line-through text-slate-400/90'
              : 'text-slate-100'
          "
          v-if="!props.arr.editing"
        >
          {{ props.arr.desc }}
        </p>
        <input
          class="w-full text-slate-100 placeholder:text-slate-500 border border-slate-800 rounded-xl p-1 mb-1 text-xl font-semibold"
          v-else
          v-model="react.desc"
        />
      </div>
      <div class="w-full -gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">Priority:</p>

        <p
          class="text-sm pb-3 font-semibold w-full"
          :class="props.arr.completed ? 'line-through opacity-90' : ''"
        >
          {{ props.arr.priority }}
        </p>
      </div>
      <div class="w-full -gap-1">
        <p class="text-sm text-slate-500/35 font-semibold w-full">Due Date:</p>
        <p
          class="text-sm pb-3 text-slate-500 font-semibold w-full"
          :class="
            props.arr.completed
              ? 'line-through text-slate-400/90'
              : 'text-slate-100'
          "
          v-if="!props.arr.editing"
        >
          {{ props.arr.dueDate }}
        </p>
        <input
          class="w-full text-slate-100 placeholder:text-slate-500 border border-slate-800 rounded-xl p-1 mb-1 text-sm font-semibold"
          type="date"
          v-else
          v-model="react.dueDate"
        />
      </div>
      <p class="hidden"></p>
    </div>
    <div
      class="flex flex-col gap-8 justify-center items-center"
      v-if="!props.arr.editing"
    >
      <button
        class="font-semibold transition-all duration-300 text-xl rounded-xl px-6 py-3 transition-all duration-200 -my-3 hover:scale-105"
        :class="
          props.arr.completed
            ? 'bg-rose-600 hover:bg-rose-500 text-slate-800'
            : 'bg-green-400 hover:bg-green-300 text-slate-950'
        "
        @click="
          props.arr.completed
            ? taskStore.deleteTask(props.arr.id)
            : taskStore.CompleteTask(props.arr.id)
        "
      >
        {{ props.arr.completed ? "Delete" : "Complete" }}
      </button>
      <button
        class="bg-slate-700 hover:bg-slate-600/90 text-slate-300 p-2 transition-all duration-300 text-lg rounded-xl px-6 py-3 transition-all duration-200 -my-3 hover:scale-105"
        @click="taskStore.editTask(props.arr.id)"
      >
        Edit
      </button>
    </div>

    <div class="flex flex-col gap-8 justify-center items-center" v-else>
      <button
        class="font-semibold transition-all duration-300 text-xl rounded-xl px-6 w-3/2 py-3 transition-all duration-200 -my-3 hover:scale-105 bg-green-400 hover:bg-green-300 text-slate-950"
        @click="taskStore.saveTask(props.arr.id, react)"
      >
        Save
      </button>
      <button
        class="font-semibold transition-all duration-300 text-xl rounded-xl px-6 w-4/3 py-3 transition-all duration-200 -my-3 hover:scale-105 bg-rose-600 hover:bg-rose-500 text-slate-800"
        @click="Cancel(props.arr.id)"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
  import { Pen } from "lucide-vue-next";
  import { useTaskStore } from "../store/taskStore";
  import { reactive } from "vue";

  import { Priority } from "../composables/PriorityColor";

  const taskStore = useTaskStore();

  const props = defineProps({
    arr: Object,
  });

  let react = reactive({
    id: props.arr.id,
    title: props.arr.title,
    desc: props.arr.desc,
    priority: props.arr.priority,
    dueDate: props.arr.dueDate,
    completed: props.arr.completed,
    editing: props.arr.editing,
  });

  function Cancel(id) {
    react = {
      id: props.arr.id,
      title: props.arr.title,
      desc: props.arr.desc,
      priority: props.arr.priority,
      dueDate: props.arr.dueDate,
      completed: props.arr.completed,
      editing: props.arr.editing,
    };

    taskStore.editTask(id);
  }
</script>
