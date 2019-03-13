import * as types from './mutations-types';

export default {
  [types.setCart](state, value) {
    state.cart = value;
    wx.setStorageSync('cart', value);
  },
};
