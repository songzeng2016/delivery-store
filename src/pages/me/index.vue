<template>
  <div class="me">
    <div class="header">
      <!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
      <div class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <span class="name">
        <open-data type="userNickName"></open-data>
      </span>
    </div>
    <ul class="type-list">
      <li class="list">
        <span class="left">
          <span class="text text1">我的订单</span>
        </span>
        <img class="icon-right" src="/static/images/icon_right.png" alt="">
      </li>
    </ul>
    <ul class="order-list">
      <li class="list">
        <img class="img" src="/static/images/icon_order_paid.png" alt="">
        <span class="text">待付款</span>
      </li>
      <li class="list">
        <img class="img" src="/static/images/icon_order_delivering.png" alt="">
        <span class="text">待发货</span>
      </li>
      <li class="list">
        <img class="img" src="/static/images/icon_order_deliveried.png" alt="">
        <span class="text">待收货</span>
      </li>
      <li class="list">
        <img class="img" src="/static/images/icon_order_comment.png" alt="">
        <span class="text">待评论</span>
      </li>
    </ul>
    <ul class="type-list">
      <li class="list">
        <span class="left">
          <img class="icon" src="/static/images/icon_collect.png" alt="">
          <span class="text">我的收藏</span>
        </span>
        <img class="icon-right" src="/static/images/icon_right.png" alt="">
      </li>
      <li class="list">
        <span class="left">
          <img class="icon" src="/static/images/icon_bouns.png" alt="">
          <span class="text">红包/优惠券</span>
        </span>
        <img class="icon-right" src="/static/images/icon_right.png" alt="">
      </li>
      <li class="list">
        <span class="left">
          <img class="icon" src="/static/images/icon_address.png" alt="">
          <span class="text">收货地址</span>
        </span>
        <img class="icon-right" src="/static/images/icon_right.png" alt="">
      </li>
      <li class="list">
        <span class="left">
          <img class="icon" src="/static/images/icon_integral.png" alt="">
          <span class="text">积分记录</span>
        </span>
        <img class="icon-right" src="/static/images/icon_right.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" type="text/stylus" scoped>
  .me
    height: fit-content
    min-height: 100%
    background: #f4f4f4
    color: #333
    .header
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      height: 200px
      background: #333
      .avatar
        width: 70px
        height: 70px
        border-radius: 50%
        overflow: hidden
      .name
        margin-top: 10px
        color: #fff
        font-size: 16px
    .order-list
      display: flex
      height: 84px
      background: #fff
      .list
        flex: 1
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .img
          width: 36px
          height: 36px
        .text
          color: #666
          font-size: 12px
    .type-list
      &:last-child
        margin: 10px 0
      .list
        display: flex
        justify-content: space-between
        align-items: center
        height: 54px
        padding: 0 10px
        background: #fff
        border-bottom: 1px solid #e6e6e6
        box-sizing: border-box
        .left
          display: flex
          align-items: center
        .icon
          width: 22px
          height: 22px
          margin-right: 5px
        .text
          font-size: 12px
          &.text1
            font-size: 14px
        .icon-right
          width: 22px
          height: 22px
</style>
