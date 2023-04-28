import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },

    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/AllProductsView.vue'),
    },

    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
    },

    {
      path: '/basket',
      name: 'basket',
      component: () => import('@/views/BasketView.vue'),
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue'),
    },

    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue'),
    },

    {
      path: '/buy',
      name: 'buy',
      component: () => import('@/views/WhereToBuyView.vue'),
    },

    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
    },

    {
      path: '/blogs/:id',
      name: 'blogs',
      component: () => import('@/views/BlogInView.vue'),
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue'),
    },

    {
      path: '/cabinet',
      name: 'cabinet',
      component: () => import('@/views/PersonalAreaView.vue'),
    },
  ],
})

export default router
