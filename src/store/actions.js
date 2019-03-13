import ajax from '../utils/ajax';
import * as types from './mutations-types';

export default {
  [types.addCart]({commit, state}, goods) {
    ajax.post('/cart/add', goods).then(json => {
      const cart = state.cart || [];
      cart.push(goods);
      commit(types.setCart, cart);
    });
  },
};
