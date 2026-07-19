<template>
  <div
    class="w-1/1 flex fixed items-center justify-center fixed bottom-3 z-10 pointer-events-none"
  >
    <div
      class="flex width-auto gap-1 md:gap-3 lg:gap-5 rounded-full border-2 border-sky-950 bg-slate-900 justify-between items-center p-2 md:p-5 lg:px-10 lg:p-5 md:m-3 lg:m-5 pointer-events-auto"
    >
      <RouterLink
        to="/focus"
        class="md:p-3 lg:p-5 transition-all duration-400 rounded-full transition-all"
        :class="isCurrentRoute('focus')"
      >
        <Timer
          size="50"
          class="duration-400"
          :class="RouteForDifferentSize('focus')"
        />
      </RouterLink>
      <RouterLink
        to="/tasks"
        class="md:p-3 lg:p-5 transition-all duration-400 rounded-full transition-all"
        :class="isCurrentRoute('tasks')"
      >
        <CheckSquare
          size="50"
          class="duration-400"
          :class="RouteForDifferentSize('tasks')"
        />
      </RouterLink>
      <RouterLink
        to="/"
        class="md:p-3 lg:p-5 transition-all duration-400 rounded-full transition-all"
        :class="isCurrentRoute('home')"
      >
        <Home
          size="50"
          class="duration-400"
          :class="RouteForDifferentSize('home')"
        />
      </RouterLink>
      <RouterLink
        to="/calendar"
        class="md:p-3 lg:p-5 transition-all duration-400 rounded-full transition-all"
        :class="isCurrentRoute('calendar')"
      >
        <CalendarCheck
          size="50"
          class="duration-400"
          :class="RouteForDifferentSize('calendar')"
        />
      </RouterLink>
      <RouterLink
        to="/settings"
        class="md:p-3 lg:p-5 transition-all duration-400 rounded-full transition-all"
        :class="isCurrentRoute('settings')"
      >
        <Settings
          size="50"
          class="duration-400"
          :class="RouteForDifferentSize('settings')"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink, useRoute } from "vue-router";
  import { ref } from "vue";
  import {
    Timer,
    Settings,
    CheckSquare,
    Home,
    Calendar,
    Calendar1,
    CalendarCheck,
  } from "lucide-vue-next";

  const route = useRoute();

  function RouteForDifferentSize(path) {
    return route.name === path
      ? [
          "scale-75",
          "hover:scale-80",
          "md:scale-75",
          "md:hover:scale-80",
          " lg:scale-125",
          "lg:hover:scale-140",
        ]
      : [
          "scale-50",
          "md:hover:scale-60",
          "md:scale-75",
          "md:hover:scale-85",
          "lg:scale-90",
          "lg:hover:scale-110",
        ];
  }

  function isCurrentRoute(path) {
    if (route.name === path) {
      return ["bg-sky-950", "text-white", "shadow-lg"];
    } else {
      return [" text-slate-400", "bg-white/5"];
    }
  }
</script>
