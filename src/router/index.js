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
      title:"Home"
    }
  },
  // {
  //   path: '/list',
  //   name: 'listing',
  //   component: ListingPageView,
  //   meta:{
  //     title:"Home"
  //   }
  // },
  {
    path: '/api/resume/new',
    name: 'add',
    component: ResumePageView,
    meta:{
      title: "Create Resume"
    }
  },
  {
    path: '/api/resume/edit/:id',
    name: 'editResume',
    component: EditResumePageView,
    meta:{
      title: "Update Resume"
    }
  },
  {
    path: '/api/resume/preview/:id',
    name: 'previewResume',
    component: Preview,
    meta:{
      reload:true,
      title: "Preview Resume"
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
