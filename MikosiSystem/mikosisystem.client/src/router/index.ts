import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //お申込みフォーム（入力画面）
    {
      path:'/',
      name:'apply',
      component:() => import('../views/ApplyView.vue'),
    },
    {
      path:'/confirm',
      name:'confirm',
      component:() => import('../views/ConfirmView.vue'),
    },
    {
      path:'/complete',
      name:'complete',
      component:() =>import('../views/CompleteView.vue'),
    },
    {
      path:"/test",
      name:'test',
      component:() =>import('../views/ParentView.vue'),
    }
  ],
})

export default router
