import {module} from 'angular';
import {
  registerDirective,
  createUnObservableDirective
} from './directive.ts';

let layout = module('ml.layout', []);
registerDirective(layout);
layout
  .directive('layoutWrap'   , createUnObservableDirective('layout-wrap'))
  .directive('layoutNowrap' , createUnObservableDirective('layout-nowrap'))
  .directive('layoutNoWrap' , createUnObservableDirective('layout-no-wrap'))
  .directive('layoutFill'   , createUnObservableDirective('layout-fill'));

export default layout.name;
