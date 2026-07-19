import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FocusView from '../views/FocusView.vue'
import SettingsView from '../views/SettingsView.vue'
import CalendarView from '../views/CalendarView.vue'
import TasksView from '../views/TasksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
   {
    path: '/focus',
    name: 'focus',
    component: FocusView,
  },
   {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
  },
   {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
   {
    path: '/tasks',
    name: 'tasks',
    component: TasksView,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router