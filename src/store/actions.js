import ajax from '../utils/ajax';
import * as types from './mutations-types';

export default {
  [types.addCart]({ commit, state }, goods) {
    const cart = state.cart || [];
    let hasGoods = false;
    let goodsIndex = 0;
    cart.forEach((item, index) => {
      if (item.id === goods.id) {
        hasGoods = true;
        goodsIndex = index;
      }
    });

    if (hasGoods) {
      const num = parseInt((cart[goodsIndex].num || 1)) + 1;
      cart[goodsIndex].num = num;
      goods.num = num;
    } else {
      goods.num = 1;
      cart.push(goods);
    }

    ajax.post('/cart/add', goods).then(json => {
      commit(types.setCart, cart);
    });
  },
  [types.deleteCart]({ commit, state }, ids) {
    const cart = (state.cart || []).filter(item => !ids.includes(item.id));
    commit(types.setCart, cart);
  }
};
