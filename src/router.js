import { createRouter, createWebHashHistory } from 'vue-router'

import Homepage from "@/Layout/Homepage.vue"
import AboutMe from "@/Layout/AboutMe.vue"

const routes = [
    { path: '/', component: Homepage },
    { path: '/about-me', component: AboutMe },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router