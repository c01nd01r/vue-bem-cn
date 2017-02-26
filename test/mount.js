import Vue from '../node_modules/vue/dist/vue';
import bemCn from '../dist/vue-bem-cn.umd';

export default function mount(options, pluginConfig) {
  bemCn.installed = false;
  Vue.use(bemCn, pluginConfig);
  return new Vue(options).$mount();
}

