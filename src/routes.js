import IndexPage from './views/IndexPage.vue';
import AboutPage from './views/AboutPage.vue';


const routes = [
    {
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
   
  ]
  
 
  
  export default routes