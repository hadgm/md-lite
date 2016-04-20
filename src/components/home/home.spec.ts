import home from './home.module.ts';
import {HomeController} from './HomeController.ts';
import {expect} from 'chai';

declare const window: any;
const module = window.module;

describe('Home Component', () => {

  let $rootScope;
  let $log;

  beforeEach(module(home));

  beforeEach(inject((_$rootScope_, _$log_) => {
    $rootScope = _$rootScope_.$new();
    $log = _$log_;
  }));

  describe('HomeController', () => {

    let controller;
    beforeEach(() => {

      controller = new HomeController($log);
    });

    it('should have title', () => {
      expect(controller.title).to.equal('Home');
    });

  });

  describe('Home Component', () => {
    let element;
    let scope;

    beforeEach(inject(($compile) => {
      element = angular.element('<home></home>');
      $compile(element)($rootScope);
      scope = element.isolateScope();

      $rootScope.$digest();
    }));

    it('should compile', () => {
      expect(element[0].children[0].textContent).to.equal('Home');
    });

  });

});
