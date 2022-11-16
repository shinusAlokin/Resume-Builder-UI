import { createRouter, createWebHistory } from 'vue-router'
import ListingPageView from '../views/ListingPageView'
import ResumePageView from '../views/ResumePageView'
import EditResumePageView from '../views/EditResumePageView'
import Preview from '../views/Preview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListingPageView,
    meta:{
      reload:true
    }
  },
  {
    path: '/list',
    name: 'listing',
    component: ListingPageView
  },
  {
    path: '/add',
    name: 'add',
    component: ResumePageView
  },
  {
    path: '/edit/:id',
    name: 'editResume',
    component: EditResumePageView
  },
  {
    path: '/preview/:id',
    name: 'previewResume',
    component: Preview,
    meta:{
      reload:true
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
