<template>
  <div class="cart">
    <ul v-if="list.length" class="wrapper">
      <li class="list" v-for="(item, index) in list" :key="index">
        <checkbox-group @change="checked(index)">
          <checkbox :checked="item.checked"></checkbox>
        </checkbox-group>
        <img class="img" :src="host + item.img" alt="">
        <span class="info">
          <span class="name">{{item.name}}</span>
          <div class="bottom">
            <span class="price">￥{{item.price}}</span>
            <div class="button">
              <span>-</span>
              <input class="input" type="number" v-model="item.num">
              <span>+</span>
            </div>
          </div>
        </span>
      </li>
    </ul>
    <div v-else class="empty">
      <img class="icon" src="/static/images/icon_cart_empty.png" alt="">
      <p class="desc">购物车空空如也~</p>
    </div>
    <div v-if="list.length" class="footer">
      <checkbox-group @change="selectAll">
        <checkbox :checked="allChecked">全选</checkbox>
      </checkbox-group>
      <span>
        <span>合计:</span>
        <span class="price">￥{{selectPrice}}</span>
        <span class="settle" @click="navToConfirm">结算({{selectNum}})</span>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCart, setCart } from 'store/mutations-types';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        list: [],
        allChecked: false,
        selectNum: 0,
        selectPrice: 0
      };
    },
    computed: {
      ...mapGetters([
        getCart
      ])
    },
    watch: {
      getCart(list) {
        this.list = list;
      },
      list(list) {
        if (!list) {
          return;
        }
        let num = 0;
        let price = 0;
        let allChecked = true;
        list.forEach(item => {
          if (item.checked) {
            num += parseInt(item.num);
            price += item.num * item.price;
          } else {
            allChecked = false;
          }
        });
        this.selectNum = num;
        this.selectPrice = price;
        this.allChecked = allChecked;

        this.setCart(list);
      }
    },
    mounted() {
      this.list = this.getCart;
    },
    methods: {
      ...mapMutations([
        setCart
      ]),
      // 单个商品选择，切换选择状态
      checked(index) {
        const item = this.list[index];
        item.checked = !item.checked;
        this.list.splice(index, 1, item);
      },
      // 全选
      selectAll() {
        this.allChecked = !this.allChecked;
        this.list = this.list.map(item => {
          item.checked = this.allChecked;
          return item;
        });
      },
      navToConfirm() {
        if (!this.selectNum) {
          wx.showToast({
            title: '请选择商品',
            icon: 'none',
            duration: 1000
          });
          return;
        }
        wx.navigateTo({
          url: '/pages/confirm/main'
        });
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .button
    display: flex
    border: 1px solid gray
    border-radius: 5px
    span
      padding: 0 5px
    .input
      width: 30px
      border-left: 1px solid gray
      border-right: 1px solid gray
      text-align: center

  .cart
    height: 100%
    padding: 15px
    background: #f4f4f4
    .wrapper
      padding: 5px 15px
      background: #fff
      border-radius: 10px
      .list
        display: flex
        align-items: center
        margin: 10px 0
        .img
          width: 100px
          height: 80px
          margin: 0 10px
        .info
          flex: auto
          display: flex
          flex-direction: column
          height: 100%
          font-size: 18px
          .bottom
            display: flex
            justify-content: space-between
            align-items: center
            margin-top: 15px
            .price
              color: #f2540f
    .empty
      padding: 20px 0
      text-align: center
      .icon
        width: 150px
        height: 150px
      .desc
        color: #666666
    .footer
      position: fixed
      left: 0
      bottom: 0
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      height: 50px
      padding: 0 15px
      box-sizing: border-box
      border-top: 1px solid #ddd
      font-size: 16px
      .price
        margin: 0 5px
        color: #f2540f
      .settle
        padding: 8px 22px
        background: linear-gradient(to right, #fd8f03, #f2540f)
        border-radius: 20px
        color: #ffffff
</style>
