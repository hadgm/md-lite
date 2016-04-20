import {SomeService} from './SomeService.ts';

describe('SomeService', function() {
  let service;
  let $log;
  let $httpBackend;

  beforeEach(inject((_$log_, _$httpBackend_, _$http_, _$q_) => {
    $log = _$log_;
    $httpBackend = _$httpBackend_;
    service = new SomeService($log, _$http_, _$q_);
  }));

  it('should say its name', () => {
    expect(service.getName()).toBe('SomeService');
  });

  it('should set name', () => {
    let name = 'a name';
    service.setName(name);
    expect(service.getName()).toBe(name);
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
        expect(service.item).toBeDefined;
        expect(service.item).toEqual({
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
      expect(res).toEqual(jasmine.any(Array));
      expect(res[0]).toEqual({
        entity: 123,
        controller: 'action',
      });
      done();
    });

    $httpBackend.flush();

  });
});
