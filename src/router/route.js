const routes = [{
  path: '/',
  name: 'redirect_index',
  redirect: '/index',
}, {
  path: '/index',
  name: 'index',
  component: () => import('../views/index/Index.vue')
}, {
  path: '/query',
  name: 'query',
  component: () => import('../views/query/Index.vue')
}, {
  path: '/ticket',
  name: 'ticket',
  component: () => import('../views/ticket/Index.vue')
}, {
  path: '/order',
  name: 'order',
  component: () => import('../views/order/Index.vue')
}];
export { routes };
