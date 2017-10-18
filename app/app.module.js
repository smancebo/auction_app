import $ from 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'ng1bs4/dist/ng1bs4.css';


import angular from 'angular';
import uirouter from 'angular-ui-router';
import ng1bs4 from 'ng1bs4';
import appRoutes from './app.routes';
import './assets/sass/main.scss';
import appComponent from './app.component';
window.$ = $;


// Modules
import loginModule from './login/login.module';
import auctionModule from './auction/aution.module';
import sharedModule from './shared/shared.module';

angular.module('crossoverapp', [ng1bs4, loginModule, uirouter, auctionModule, sharedModule])
  .component('app', appComponent)
  .config(appRoutes);
