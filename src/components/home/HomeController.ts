export class HomeController {
  static $inject = ['$log'];
  public title: string = 'Home';

  constructor(
    private $log
  ) {
    ///
    this.activate();
  }

  activate() {
    this.$log.info('HomeController activated');
  }

}

HomeController.$inject = ['$log'];
