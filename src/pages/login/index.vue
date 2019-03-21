<template>
  <div class="login">
    <img class="logo" src="/static/images/logo.jpg" alt="">
    <input class="input" v-model="form.account" type="text" placeholder="用户名">
    <input class="input" v-model="form.password" type="password" placeholder="密码">
    <button class="button" type="primary" @click="login">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        this.$post('/user/login', this.form)
          .then(json => {
            const {sessionId} = json.data;
            wx.setStorageSync('sessionId', sessionId);
            wx.setStorageSync('userInfo', json.data);
            wx.switchTab({
              url: '/pages/index/main'
            });
          });
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .login
    display: flex
    flex-direction: column
    align-items: center
    padding: 50px
    .input, .button
      width: 100%
      margin-bottom: 20px
      box-sizing: border-box
    .input
      height: 45px
      padding: 10px
      border: 1px solid #ddd
      border-radius: 10px
    .logo
      width: 100px
      height: 100px
      margin-bottom: 30px
</style>
