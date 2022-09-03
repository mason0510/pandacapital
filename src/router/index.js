//import from vue-router
import { createRouter, createWebHistory } from 'vue-router'
//import from components
import Home from '../components/HelloWorld.vue'
//pages
import HomePage from "../pages/BBSHome.vue";
import QuestionsAnswer from "../pages/BBSAsk.vue";
import Community from "../pages/BBSCommunity.vue";

import Test from '../components/Test.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        name: 'home',
        path:'/home',
        component:HomePage,
    },
    {
        name: 'ask',
        path: '/ask',
        component: QuestionsAnswer,
    },
    {
        name:'community',
        path: '/community',
        component:Community,
    },
    {
        name:'test',
        path: '/test',
        component:Test,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
