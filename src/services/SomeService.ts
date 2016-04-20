export class SomeService {
  static $inject = [
    '$log',
    '$http',
    '$q',
  ];

  private name: string;
  private item: any;

  constructor(
    private $log,
    private $http,
    private $q
  ) {
    this.activate();
  }

  protected getName(): string {
    if (this.name) {
      return this.name;
    }

    return 'SomeService';
  }

  doAction(id) {
    return this.$http.get(`/api/entity/${id}/action`)
      .then(res => {
        this.item = res.data;
        return this.item;
      });
  }

  withQ(arr) {
    let promises = arr.map(id => this.doAction(id));
    return this.$q.all(promises);
  }

  public setName(name) {
    this.name = name;
  }

  private activate() {
    this.$log.info('SomeService activated');
  }
}

