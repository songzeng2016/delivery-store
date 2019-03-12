const url = 'http://127.0.0.1:3000';
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
          'content-type': method === methodType.post ? 'application/x-www-form-urlencoded' : 'application/json'
        },
        success: (res) => {
          resolve(res.data);
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
