import Vue from 'vue'
import App from './App'
import ajax from './utils/ajax';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$get = ajax.get;
Vue.prototype.$post = ajax.post;

Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();
