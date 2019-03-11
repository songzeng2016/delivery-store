const url = 'http://127.0.0.1:3000';
const methodType = {
  get: 'GET',
  post: 'POST'
};

class Ajax {
  constructor() {
    this.url = url;
  }

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
  }

  async get(url, data) {
    const json = await this._request(methodType.get, url, data);
    return json;
  }

  async post(url, data) {
    console.log(this._request);
    const json = await this._request(methodType.post, url, data);
    debugger;
    return json;
  }
}

export default new Ajax();
