export default class SomeService {

  constructor($log, $http, $q) {
    this.$log = $log;
    this.$http = $http;
    this.$q = $q;

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

  doAction(id) {
    return this.$http.get(`/api/entity/${id}/action`)
      .then(res => {
        this.item = res.data;
      });
  }

  withQ(arr) {
    let promises = arr.map(id => this.doAction(id));
    return this.$q.all(promises);
  }
}

SomeService.$inject = ['$log', '$http', '$q'];
