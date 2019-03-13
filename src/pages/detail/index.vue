<template>
  <div class="detail">
    <img :src="goods.img" alt="">
    <div class="cart">
      <div class="add" @click="add">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { addCart } from 'store/mutations-types';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        goods: {}
      };
    },
    mounted() {
      const { goods } = this.$mp.query;
      this.goods = JSON.parse(goods);
    },
    methods: {
      ...mapActions([
        addCart
      ]),
      add() {
        this.addCart(this.goods);
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .detail
    background: #f4f4f4
    .cart
      position: fixed
      left: 0
      bottom: 0
      display: flex
      width: 100%
      height: 50px
      color: #ffff
      .add, .buy
        flex: auto
        display: flex
        justify-content: center
        align-items: center
        height: 100%
      .add
        background: green
      .buy
        background: red
</style>
