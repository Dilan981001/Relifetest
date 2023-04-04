import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import routes from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
