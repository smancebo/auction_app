import angular from 'angular';
import auctionComponent from './auction.component';
import autionRoutes from './auction.routes';


module.exports = angular.module('crossoverapp.auction',[])
.config(autionRoutes)
.component('auction', auctionComponent)
.name;
