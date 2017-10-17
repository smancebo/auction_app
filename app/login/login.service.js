export default class loginService {
  constructor(HttpClient) {
    this.httpClient = HttpClient;
  }
  login(username) {
    return this.httpClient.Post('/login', { username });
  }
}
loginService.$inject = ['HttpClient'];
