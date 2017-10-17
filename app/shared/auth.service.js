export default class AuthService {
  constructor($state) {
    this.$state = $state;
  }
  Set(obj) {
    sessionStorage.setItem('app-settings', JSON.stringify(obj));
  }
  Get() {
    return JSON.parse(sessionStorage.getItem('app-settings'));
  }
  Clear() {
    sessionStorage.removeItem('app-settings');
  }
  LogOff() {
    this.Clear();
    this.$state.go('login');
  }
}
