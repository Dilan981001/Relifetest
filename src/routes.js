import IndexPage from './views/IndexPage.vue';
import AboutPage from './views/AboutPage.vue';
import ViewProductPage from './views/ViewProductPage.vue'
import CartPage from './views/CartPage.vue'
import SignUp from './components/Marketplace/SignUp.vue';
import LogIn from './components/Marketplace/LogIn.vue'
import AddCategory from './views/Category/AddCategory.vue';
import AdminProductPage from './views/Product/AdminProductPage.vue';
import AdminAddProduct from './views/Product/AdminAddProduct.vue';
import AdminEditProduct from './views/Product/AdminEditProduct.vue';

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
        path: '/cart',
        name: 'cart',
        component: CartPage    },
        {
          path: '/admin/category/add',
          name: 'AddCategory',
          component: AddCategory
        },
        {
          path: '/admin/product',
          name: 'AdminProduct',
          component: AdminProductPage
        },
        {
          path: '/admin/product/new',
          name: 'AdminAddProduct',
          component: AdminAddProduct
        },
         {
          path: '/admin/product/:id',
          name: 'AdminEditProduct',
          component: AdminEditProduct
        },
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