import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/flatty.theme.css';
import 'font-awesome/css/font-awesome.css';
import './assets/sass/main.scss';

import angular from 'angular';
import appRoutes from './app.routes';

import uirouter from 'angular-ui-router';
import appComponent from './app.component';


// Modules
import loginModule from './login/login.module';
import auctionModule from './auction/aution.module';
import sharedModule from './shared/shared.module';

angular.module('crossoverapp',[loginModule, uirouter, auctionModule, sharedModule])
.component('app', appComponent)
.config(appRoutes);
