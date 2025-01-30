export default {
  routes: [
    {
      method: 'GET',
      path: '/get-menu',
      handler: 'get-menu.getCategoryTree',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
