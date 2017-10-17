export default class HttpClient {
  constructor($http) {
    this.$http = $http;
    this.API = 'http://localhost:8090/api';
  }
  Post(url, body) {
    const apiUrl = `${this.API}${url}`;
    return this.$http.post(apiUrl, body);
  }
  Get(url, params) {
    const apiUrl = `${this.API}${url}`;
    let p = '';
    if(params instanceof Array) {
      p = parseParams();
    } else {
      p = params;
    }
    return this.$http.get(`${apiUrl}/${p}`);
  }
  Put(url, body) {
    const apiUrl = `${this.API}${url}`;
    return this.$http.put(apiUrl, body);
  }
  Delete(url, params) {
    const apiUrl = `${this.API}${url}`;
    let p = '';
    if(params instanceof Array) {
      p = parseParams();
    } else {
      p = params;
    }
    return this.$http.delete(`${apiUrl}/${p}`);
  }
}

function parseParams(params) {
  let p = '';
  params.forEach((e) => {
    p = `${p}/${e}`;
  });
  return p;
}
