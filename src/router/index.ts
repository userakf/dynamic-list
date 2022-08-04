import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        meta:{
            title:'首页'
        },
        children:[
            {
                path:'',
                name:'home',
                component:() => import('@/view/home/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router