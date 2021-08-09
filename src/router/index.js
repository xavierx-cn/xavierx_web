import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import XBox from '../components/XBox/XBox.vue';
import Timestamp from "../components/XBox/XBoxes/Timestamp.vue"
import Translation from "../components/XBox/XBoxes/Translation.vue"

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/xbox',
        name: 'xbox',
        component: XBox,
        children: [
            {
                path: "timestamp",
                name: 'timestamp',
                component: Timestamp,
            },
            {
                path: "translation",
                name: 'translation',
                component: Translation,
            },
        ]
    }
]
})

export default router;

