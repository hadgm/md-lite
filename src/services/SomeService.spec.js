import angular from 'angular';
import ngMock from 'angular-mocks';
import SomeService from './SomeService.js';

describe('SomeService', function() {
  let service;
  let $log;
  beforeEach(inject((_$log_) => {
    $log = _$log_;
  }));

  beforeEach(done => {
    service = new SomeService($log);
    done();
  });

  it('should say its name', () => {
    expect(service.getName()).to.equal('SomeService.js');
  });

  it('should set name', () => {
    let name = 'a name';
    service.setName(name);
    expect(service.getName()).to.equal(name);
  });

});
