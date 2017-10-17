import angular from 'angular';
import uirouter from 'angular-ui-router';
import loginComponent from './login.component';
import loginRoutes from './login.routes';
import loginService from './login.service';
import SharedModule from '../shared/shared.module';


export default angular.module('crossoverapp.login', [uirouter, SharedModule])
  .config(loginRoutes)
  .service('$login', loginService)
  .component('login', loginComponent)
  .name;
