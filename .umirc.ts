import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/home/Home' },
  ],
  fastRefresh: {},
  proxy: {
    '/snnu': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/snnu': '' },
    },
  },
  theme: {
    'primary-color': '#144937',
  },
});
