import * as types from './mutations-types';

export default {
  [types.getCart](state) {
    return state.cart || wx.getStorageSync('cart');
  },
};
