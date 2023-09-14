import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import NewNoteView from '../views/NewNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotesView
    },
    {
      path: '/new-note',
      name: 'newNoteView',
      component: NewNoteView
    }
  ]
})

export default router
