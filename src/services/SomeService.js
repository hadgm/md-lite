export default class SomeService {

  constructor($log) {
    this.$log = $log;

    /////
    this.activate();
  }

  activate() {
    this.$log.info('SomeService activated');
  }

  getName() {
    if (this.name) {
      return this.name;
    }

    return 'SomeService.js';
  }

  setName(name) {
    this.name = name;
  }
}

SomeService.$inject = ['$log'];
