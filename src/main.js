import Vue from 'vue'
import App from './App'
import ajax from './utils/ajax';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$get = ajax.get;
Vue.prototype.$post = ajax.post;

const app = new Vue(App);
app.$mount();
