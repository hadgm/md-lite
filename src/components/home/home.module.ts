import * as angular from 'angular';
import homeComponent from './homeComponent.ts';

export default angular.module('home', [])
  .directive('home', homeComponent)
  .name;
