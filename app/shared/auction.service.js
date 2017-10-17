
export default class AuctionService {
  constructor(HttpClient) {
    this.httpClient = HttpClient;
  }
  save(auction) {
    return this.httpClient.Post('/auction', auction);
  }
}
AuctionService.$inject = ['HttpClient'];
