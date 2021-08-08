import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import XBox from '../components/XBox/XBox.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
    {
        path: '/',
        component: Home
    },
    {
        path: '/xbox',
        component: XBox
    }
]
})

export default router;

