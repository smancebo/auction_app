import angular from 'angular';
import playerStats from './player.stats.directive';
import inventoryDirective from './inventory.directive';
import currentAuctionDirective from './current-auction.directive';
import AuthService from './auth.service';
import HttpClient from './httpClient';
import modalService from './modal_dlg.service';
import AuctionService from './auction.service';


module.exports = angular.module('crossoverapp.shared', [])
  .service('AuthService', AuthService)
  .service('HttpClient', HttpClient)
  .service('$modal', modalService)
  .service('$auction', AuctionService)
  .directive('playerStats', playerStats)
  .directive('inventory', inventoryDirective)
  .directive('currentAuction', currentAuctionDirective)
  // .directive('inventory', inventory)
  // .directive('currentAuction', currentAuction)
  .name;
