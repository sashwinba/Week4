import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/product.vue'
import addProduct from '../views/addProduct.vue'
import editProduct from '../views/editProduct.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:productId',
    name: 'ProductDetails',
    props: true,
    component: Product
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: addProduct
  },
  {
    path: '/products/:productId/editProduct',
    name: 'EditProduct',
    component: editProduct,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
