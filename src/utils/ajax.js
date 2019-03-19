// const url = 'http://127.0.0.1:3000';
const url = 'http://songzeng1994.cn:3000/api';
const methodType = {
  get: 'GET',
  post: 'POST'
};

const ajax = {
  url,
  _request(method, url, data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${this.url}${url}`,
        method,
        data,
        header: {
          'content-type': method === methodType.post ? 'application/x-www-form-urlencoded' : 'application/json',
          'sessionId': wx.getStorageSync('sessionId')
        },
        success: (res) => {
          const { code, msg } = res.data;
          if (code === '200') {
            resolve(res.data);
          } else if (code === '501') {
            console.log('未登录');
            wx.redirectTo({
              url: '/pages/login/main'
            });
            wx.setStorageSync('sessionId', null);
            wx.setStorageSync('cart', null);
          } else {
            console.log(msg);
          }
        }
      });
    });
  },

  get: async (url, data) => {
    const json = await ajax._request(methodType.get, url, data);
    return json;
  },

  post: async (url, data) => {
    const json = await ajax._request(methodType.post, url, data);
    return json;
  }
};

export default ajax;
