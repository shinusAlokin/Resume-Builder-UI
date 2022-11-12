import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListingPageView from '../views/ListingPageView'
import ResumePageView from '../views/ResumePageView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
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
  }]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
