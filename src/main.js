import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import routes from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
