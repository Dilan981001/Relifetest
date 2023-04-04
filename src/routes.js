import IndexPage from './views/IndexPage.vue';
import AboutPage from './views/AboutPage.vue';
import ViewProductPage from './views/ViewProductPage.vue'
import SignUp from './components/Marketplace/SignUp.vue';
import LogIn from './components/Marketplace/LogIn.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/products/:productId',
      name: 'ViewProduct',
      component: ViewProductPage    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
  ]
  
 
  
  export default routes