<template>
  <div class="detail">
    <img :src="host + goods.img" alt="">
    <p>{{goods.name}} ￥{{goods.price}}</p>
    <p>{{goods.desc}}</p>
    <div class="cart">
      <div class="count" @click="navToCart">
        <span class="num">{{cartCount}}</span>
        <img class="icon" src="/static/images/icon_cart.png" alt="">
      </div>
      <div class="add" @click="add">加入购物车</div>
      <div class="buy" @click="buy">立即购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCart, addCart } from 'store/mutations-types';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        goods: {},
        cartCount: 0
      };
    },
    computed: {
      ...mapGetters([
        getCart
      ])
    },
    mounted() {
      const { id } = this.$mp.query;
      this.getDetail(id);
      this.getCartCount();
    },
    watch: {
      getCart() {
        console.log(0);
        this.getCartCount();
      }
    },
    methods: {
      ...mapActions([
        addCart
      ]),
      getDetail(id) {
        this.$post('/goods/getDetail', { id })
          .then(json => {
            this.goods = json.data;
          });
      },
      getCartCount() {
        let cartCount = 0;
        this.getCart &&
        this.getCart.forEach(item => {
          cartCount += parseInt(item.num || 1);
        });
        this.cartCount = cartCount;
      },
      add() {
        this.addCart(this.goods);
        this.cartCount += 1;
      },
      buy() {
        this.add();
        this.navToCart();
      },
      navToCart() {
        wx.switchTab({
          url: '/pages/cart/main'
        });
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
      align-items: center
      width: 100%
      height: 50px
      color: #ffff
      .count
        position: relative
        margin: 0 5px
        .num
          position: absolute
          top: -10px
          right: -2px
          color: red
        .icon
          width: 35px
          height: 35px
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
