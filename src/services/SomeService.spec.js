import SomeService from './SomeService.js';

describe('SomeService', function() {
  let service;
  let $log;
  let $httpBackend;

  beforeEach(inject((_$log_, _$httpBackend_, _$http_, _$q_) => {
    $log = _$log_;
    $httpBackend = _$httpBackend_;
    service = new SomeService($log, _$http_, _$q_);
  }));

  beforeEach(done => {
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

  it('should send request', (done) => {
    $httpBackend.expectGET('/api/entity/123/action')
      .respond(200, {
        entity: 123,
        controller: 'action',
      });

    $httpBackend.expectGET('/api/entity/124/action')
      .respond(200, {
        entity: 124,
        controller: 'action',
      });

    service.doAction(123)
      .then(res => {
        expect(service.item).to.exist;
        expect(service.item).to.eql({
          entity: 123,
          controller: 'action',
        });
        done();
      });

    $httpBackend.flush();
  });

  it('should send multi request', (done) => {
    $httpBackend.expectGET('/api/entity/123/action')
      .respond(200, {
        entity: 123,
        controller: 'action',
      });

    $httpBackend.expectGET('/api/entity/124/action')
      .respond(200, {
        entity: 124,
        controller: 'action',
      });

    service.withQ([123, 124]).then(res => {
      expect(res).to.be.an('array');
      done();
    });

    $httpBackend.flush();

  });
});
