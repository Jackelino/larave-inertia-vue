//require('./bootstrap');
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import store from './store';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(store)
      .use(bootstrap)
      .mount(el)
  },
});