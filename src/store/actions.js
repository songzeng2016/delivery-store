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
      cart.push(goods);
    }

    ajax.post('/cart/add', goods).then(json => {
      commit(types.setCart, cart);
    });
  }
};
