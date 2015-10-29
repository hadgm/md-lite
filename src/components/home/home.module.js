import angular from 'angular';
import homeComponent from './homeComponent.js';

export default angular.module('home', [])
  .directive('home', homeComponent)
  .name;
