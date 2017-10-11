import angular from 'angular';
import loginComponent from './login.component';
import uirouter from 'angular-ui-router';
import loginRoutes from './login.routes';
import loginService from './login.service';

console.log(loginComponent);
export default angular.module('crossoverapp.login',[uirouter])
                .config(loginRoutes)
                .service('$login', loginService)
                .component('login', loginComponent)
                .name;
