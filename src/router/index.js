import { createRouter, createWebHistory } from 'vue-router'
import ToDosView from './../views/TodosView.vue'
import AddToDo from '@/views/AddToDo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ToDosView',
            component: ToDosView
        },
        {
            path: '/add',
            name: 'AddToDo',
            component: AddToDo
        }
    ]
})

export default router
