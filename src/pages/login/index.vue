<template>
  <div class="login">
    <input v-model="form.account" type="text" placeholder="用户名">
    <input v-model="form.password" type="password" placeholder="密码">
    <button @click="login">登录</button>
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
            wx.switchTab({
              url: '/pages/index/main'
            });
          });
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
</style>
