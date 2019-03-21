<template>
  <div class="order">
    <ul v-for="(order, orderIndex) in list" :key="orderIndex" class="wrapper">
      <ul>
        <li class="list" v-for="(item, index) in order.list" :key="index">
          <img class="img" :src="host + item.img" alt="">
          <span class="info">
          <span class="name">{{item.name}}</span>
          <div class="bottom">
            <span class="price">￥{{item.price}}</span>
            <div class="button">
              <span>x {{item.num}}</span>
            </div>
          </div>
        </span>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: []
      };
    },
    mounted() {
      this.type = 0;
      this.userInfo = wx.getStorageSync('userInfo');
      this.getList();
    },
    methods: {
      getList() {
        this.$post('/order/getList', {
          userId: this.userInfo.id,
          type: this.type
        }).then(json => {
          this.list = json.data.list;
          !this.list.length && wx.showToast({
            title: '暂无订单',
            icon: 'none'
          });
        });
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .order
    padding: 15px
    background: #f4f4f4
    .wrapper
      padding: 5px 15px
      margin-bottom: 15px
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
</style>
