<template>
  <div class="index">
    <ul class="list-wrapper">
      <li class="list" v-for="(item, index) in list" :key="index">
        <div class="img-wrapper">
          <img class="img" :src="item.src" alt="">
        </div>
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="count">库存: {{item.count}}</p>
          <p class="price">
            <span>￥{{item.price}}</span>
            <span>   加入购物车</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import list from './data'

  export default {
    data() {
      return {
        list,
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .index
    .list-wrapper
      display: flex
      flex-wrap: wrap
      .list
        width: 50%
        padding: 10px
        box-sizing: border-box
        &:nth-child(odd)
          padding-right: 0
        .img-wrapper
          display: flex
          justify-content: center
          align-items: center
          width: 100%
          height: 150px
          background: #f4f4f4
          .img
            width: 80px
            height: 80px
        .info
          font-size: 14px
</style>
