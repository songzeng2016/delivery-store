<template>
  <div class="cart">
    <div class="empty">
      <img class="icon" src="/static/images/icon_cart_empty.png" alt="">
      <p class="desc">购物车空空如也~</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCart } from 'store/mutations-types';
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        list: []
      };
    },
    computed: {
      ...mapGetters([
        getCart
      ])
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .cart
    background: #f4f4f4
    .empty
      padding: 20px 0
      text-align: center
      .icon
        width: 150px
        height: 150px
      .desc
        color: #666666
</style>
