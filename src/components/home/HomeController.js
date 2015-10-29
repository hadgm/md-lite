export default class HomeController {

  constructor($log) {
    this.$log = $log;
    this.title = 'Home';

    /////
    this.activate();
  }

  activate() {
    this.$log.info('HomeController activated');
  }

}

HomeController.$inject = ['$log'];
