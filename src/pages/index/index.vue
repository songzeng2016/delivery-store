<template>
  <div class="index">
    <swiper
      class="swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      :circular="true"
    >
      <swiper-item v-for="item in imgUrls" :key="item">
        <image :src="item" class="image"/>
      </swiper-item>
    </swiper>
    <ul class="list-wrapper">
      <li
        class="list"
        v-for="(item, index) in list"
        :key="index"
        @click="navToDetail(item)">
        <img class="img" :src="item.src || item.img" alt="">
        <p class="name">{{item.name}}</p>
        <p class="price">￥{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import list from './data';
  import { getCart, setCart } from 'store/mutations-types';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        list,
        imgUrls: [
          'https://yanxuan.nosdn.127.net/95f65bf31c7c305da532728d75b2039f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/0dc6d7a3d012795dcdbc5508090c3d89.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/8c8ad27b6ab8c9e8841e03c5ee21954f.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      };
    },
    computed: {
      ...mapGetters([
        getCart
      ]),
    },
    mounted() {
      this.getList();
      !this.getCart && this.getCartList();
    },
    onPullDownRefresh() {
      this.getList();
    },
    methods: {
      ...mapMutations([
        setCart
      ]),
      getList() {
        this.$post('/goods/getList', {
          pageNum: 1,
          pageSize: 100
        }).then(json => {
          const list = json.data.list;
          list.forEach(item => {
            item.img = 'http://127.0.0.1:3000' + item.img;
          });
          this.list = list.concat(this.list);
        });
      },
      getCartList() {
        this.$post('/cart/get').then(json => {
          const list = json.data.list;
          this.setCart(list);
        });
      },
      navToDetail(item) {
        wx.navigateTo({
          url: `/pages/detail/main?id=${item.id}`
        });
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .index
    height: fit-content
    min-height: 100%
    background: #f4f4f4
    .swiper
      width: 100%
      height: 200px
      .image
        width: 100%
        height: 100%
    .list-wrapper
      display: flex
      flex-wrap: wrap
      padding: 2%
      justify-content: space-between
      .list
        width: 49%
        margin: 1% 0
        padding: 5px 0
        background: #ffffff
        box-sizing: border-box
        text-align: center
        font-size: 16px
        .img
          width: 100px
          height: 80px
        .name
          margin: 5px 0
          color: #666666
        .price
          color: #b03030
</style>
