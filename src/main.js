import Vue from 'vue';
import App from './App';
import ajax from './utils/ajax';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$get = ajax.get;
Vue.prototype.$post = ajax.post;

Vue.prototype.$store = store;

Vue.mixin({
  data() {
    return {
      host: ajax.host
    };
  }
// onLoad() {
//   // 解决页面返回后，数据没重置的问题
//   this.$options.data && Object.assign(this, this.$options.data());
// }
});

const app = new Vue(App);
app.$mount();
