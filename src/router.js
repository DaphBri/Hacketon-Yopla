import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue' // 1
import DetailsPage from './views/DetailsPage.vue' // 2
import AdminPage from './views/AdminPage.vue' // 3

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // 1
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    { // 2
      path: '/detailspage/:id',
      name: 'detailspage',
      component: DetailsPage
    },
    { // 3
      path: '/adminpage',
      name: 'adminpage',
      component: AdminPage
    }
  ]
})
